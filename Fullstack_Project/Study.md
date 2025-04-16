# What to build

[_ms,LMS,CMS,HMS,BMS]

## Password Reset Flow

### Overview

- **Frontend** → Sends reset request via email
- **Backend** → Generates token and sends it to user
- **Database** → Stores token temporarily for verification

### Flow Diagram

```text
Frontend               Backend               Database
  |                       |                      |
  |--- /reset-request --->|                      |
  |                       |-- Check {email} -->  |
  |                       |<-- Token Created ----|
  |<-- {token} -----------|                      |
  |                                           Stores token
```

### Token

- A **random string** generated on server
- Sent to user via email
- Used to verify user identity

---