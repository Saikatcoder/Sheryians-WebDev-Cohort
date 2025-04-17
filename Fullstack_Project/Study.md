# What to build

[_ms,LMS,CMS,HMS,BMS]

### Authaction System
--Basic UnderSanding of Auth [Databse store Structure]

**name**
**email**
**Password**
**role:User,Admin**
**Is Verified**
**PasswordRestToke**
**PasswordRestExpires**
**Verification**
**CreatAt**
# [Folder_Structure]
--create new folder name User_model.js 
--boilar plateCode 
<!-- if you build other Schema then smilple change the name like [UserSchema : for User, CarSchema:for car, BookSchema:for book] -->
```
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema();

export const User = mongoose.model("User",UserSchema);

```
```
timestam: true //[mongodb automacilly add creatAt, and updateAt]
```
# Router folder Boilar plate code
```import express from "express";

const router = express.Router();

export default router;
```
## Password Reset Flow
# Overview

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