
# Flight-Search-API

This API allows users to search for flights based on various criteria such as source, destination, direct or layover, departure date, round trip or one-way, and return date.


## API Reference

#### Get all Flights

```http
  GET /api/flights
```
No Parameters Required

#### Find flights

```http
  GET /api/flights/search
```
These Parameters are to be passed into `request.body`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `source`  | `string` | **Required**  |
| `destination`| `string` | **Required**  |
| `direct_flight`      | `bool` | **Required**  |
| `departure_date`      | `string` | **Required** |
| `round_trip`      | `bool` | **Required** |



