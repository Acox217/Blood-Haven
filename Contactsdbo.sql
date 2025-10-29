CREATE TABLE dbo.Contacts (
    Id INT IDENTITY(1,1) PRIMARY KEY,      -- Auto-incremented ID for each contact
    FullName NVARCHAR(255) NOT NULL,        -- Full Name of the person submitting the contact form
    EmailAddress NVARCHAR(255) NOT NULL,    -- Email Address
    Subject NVARCHAR(255),                  -- Subject of the message
    Message TEXT NOT NULL,                   -- The message from the user
    CreatedAt DATETIME DEFAULT GETDATE()    -- Timestamp of when the contact was created
);
