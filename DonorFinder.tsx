import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";

interface Donor {
  id: number;
  name: string;
  bloodType: string;
  location: string;
  facility: string;
  lastDonation: string;
  available: boolean;
}

const DonorFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedFacility, setSelectedFacility] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Donor[] | null>(null);

  // Mock data for demonstration
  const mockDonors: Donor[] = [
    { id: 1, name: "John Doe", bloodType: "A+", location: "Clinton", facility: "St.Dominic Hospital", lastDonation: "2024-04-15", available: true },
    { id: 2, name: "Jane Smith", bloodType: "O-", location: "Jackson", facility: "University of Mississippi Medical Center", lastDonation: "2024-03-20", available: true },
    { id: 3, name: "Robert Johnson", bloodType: "B+", location: "Madison", facility: "St.Dominic Hospital", lastDonation: "2024-02-10", available: false },
    { id: 4, name: "Sarah Williams", bloodType: "AB+", location: "Clinton", facility: "University of Mississippi Medical Center", lastDonation: "2024-04-01", available: true },
    { id: 5, name: "Michael Brown", bloodType: "A-", location: "Vicksburg", facility: "University of Mississippi Medical Center", lastDonation: "2024-03-15", available: true },
  ];

  const locations = ["Clinton", "Jackson", "Madison", "Vicksburg"];
  const facilities = ["St.Dominic Hospital", "University of Mississippi Medical Center"];
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      let results = [...mockDonors];

      // Filter by blood type
      if (selectedBloodType) {
        results = results.filter(donor => donor.bloodType === selectedBloodType);
      }

      // Filter by location
      if (selectedLocation) {
        results = results.filter(donor => donor.location === selectedLocation);
      }

      // Filter by facility
      if (selectedFacility) {
        results = results.filter(donor => donor.facility === selectedFacility);
      }

      // Filter by search term (name or blood type)
      if (searchTerm) {
        results = results.filter(
          donor => 
            donor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            donor.bloodType.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setSearchResults(results);
      setIsLoading(false);
    }, 800);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setSelectedFacility("");
    setSelectedBloodType("");
    setSearchResults(null);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col md={10} className="text-center">
          <h1 style={{ color: 'var(--primary-color)' }}>Find a Donor</h1>
          <p className="lead">
            Search our database of registered donors to find a match for your needs.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <Form onSubmit={handleSearch}>
                <Row className="align-items-end">
                  <Col md={3} className="mb-3 mb-md-0">
                    <Form.Group>
                      <Form.Label>Search by name or blood type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="E.g., John or O+"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={2} className="mb-3 mb-md-0">
                    <Form.Group>
                      <Form.Label>Blood Type</Form.Label>
                      <Form.Select
                        value={selectedBloodType}
                        onChange={(e) => setSelectedBloodType(e.target.value)}
                      >
                        <option value="">All Types</option>
                        {bloodTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  
                  <Col md={3} className="mb-3 mb-md-0">
                    <Form.Group>
                      <Form.Label>Location</Form.Label>
                      <Form.Select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option value="">All Locations</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  
                  <Col md={3} className="mb-3 mb-md-0">
                    <Form.Group>
                      <Form.Label>Facility</Form.Label>
                      <Form.Select
                        value={selectedFacility}
                        onChange={(e) => setSelectedFacility(e.target.value)}
                      >
                        <option value="">All Facilities</option>
                        {facilities.map(facility => (
                          <option key={facility} value={facility}>{facility}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  
                  <Col md={1} className="text-end mb-3 mb-md-0">
                    <Button 
                      type="submit" 
                      style={{ 
                        backgroundColor: 'var(--primary-color)', 
                        border: 'none'
                      }}
                      disabled={isLoading}
                    >
                      {isLoading ? <Spinner size="sm" animation="border" /> : <span>🔍</span>}
                    </Button>
                  </Col>
                </Row>
                
                <Row className="mt-3">
                  <Col className="text-end">
                    <Button 
                      variant="outline-secondary" 
                      onClick={resetFilters}
                      size="sm"
                    >
                      Reset Filters
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {isLoading && (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p>Searching for donors...</p>
        </div>
      )}

      {!isLoading && searchResults && (
        <Row>
          <Col>
            <h3 className="mb-4">Search Results</h3>
            {searchResults.length === 0 ? (
              <div className="text-center py-4">
                <p className="lead">No donors found matching your criteria.</p>
                <p>Try broadening your search or contact us for assistance.</p>
              </div>
            ) : (
              <Row>
                {searchResults.map(donor => (
                  <Col md={6} lg={4} className="mb-4" key={donor.id}>
                    <Card className={`shadow h-100 ${!donor.available ? 'border-danger' : ''}`}>
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="mb-0">{donor.name}</h5>
                          <span className={`badge ${donor.available ? 'bg-success' : 'bg-danger'}`}>
                            {donor.available ? 'Available' : 'Unavailable'}
                          </span>
                        </div>
                        
                        <div className="mb-3 p-2 text-center" style={{ 
                          backgroundColor: 'var(--primary-color)', 
                          color: 'white',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '1.25rem',
                          fontWeight: 'bold'
                        }}>
                          Blood Type: {donor.bloodType}
                        </div>
                        
                        <p><strong>Location:</strong> {donor.location}</p>
                        <p><strong>Facility:</strong> {donor.facility}</p>
                        <p><strong>Last Donation:</strong> {new Date(donor.lastDonation).toLocaleDateString()}</p>
                        
                        <div className="mt-3 text-end">
                          <Button 
                            variant={donor.available ? 'primary' : 'secondary'} 
                            size="sm"
                            disabled={!donor.available}
                            style={{ 
                              backgroundColor: donor.available ? 'var(--primary-color)' : undefined, 
                              border: 'none'
                            }}
                          >
                            Request Donation
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      )}

      {!searchResults && !isLoading && (
        <Row className="justify-content-center py-4">
          <Col md={8} className="text-center">
            <div className="py-5 px-4" style={{ backgroundColor: 'var(--card-bg)', borderRadius: 'var(--radius-md)' }}>
              <h3>How to Find a Donor</h3>
              <p className="mb-4">
                Use the search form above to find donors based on blood type, location, or facility.
                You can also search by donor name if you know who you're looking for.
              </p>
              <p>
                Need help? <a href="/contact">Contact our support team</a> for assistance
                with finding a suitable donor for your specific needs.
              </p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DonorFinder;