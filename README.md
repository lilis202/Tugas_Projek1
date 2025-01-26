### Anggota Kelompok:
1.Lilis : 20230040178
2. Marwa Nada N: 20230040179
3. Syahrul Aidil: 20230040166


### DATABASE: post_office
- Users: id, name, email, password, created_at, updated_at
- Shipments: id, user_id, status, origin, destination, created_at, updated_at
- Branches: id, name, location, contact_number, created_at, updated_at
- Tracking_logs: id, shipment_id, status, location, time_stamp 

### ENDPOINT:
- POST /branches
- GET /branches
- DELETE /branches/:id
- GET /branches/:id
- PUT /branches/:id
- POST /shipments
- GET /shipments
- DELETE /shipments/:id
- GET /shipments/:id
- PUT /shipments/:id
- POST /trackinglogs
- GET /trackinglogs
- DELETE /trackinglogs/:id
- GET /trackinglogs/:id
- PUT /trackinglogs/:id
- POST /register
- POST /login
- GET /users
- GET /weather?q=:query
- DELETE /users/:id
- GET /users/:id
- PUT /users/:id
