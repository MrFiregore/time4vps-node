# Time4VPS Node Library

[![npm version](https://badge.fury.io/js/time4vps-node.svg)](https://badge.fury.io/js/time4vps-node)

Time4VPS Node Library is a TypeScript/JavaScript library for interacting with the Time4VPS API. This library allows you to manage DNS records and other services provided by Time4VPS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API](#api)
  - [DNS](#dns)
- [Contributing](#contributing)

## Installation

Install the library using npm or yarn:

```bash
npm install time4vps-node
# or
yarn add time4vps-node
```

## Usage

Here's an example of how to use the Time4VPS Node Library:

```typescript
import { Time4VpsClient } from 'time4vps-node';

async function main() {
  const client = new Time4VpsClient('your_username', 'your_password');

  try {
    const dnsList = await client.dns.listDNS();
    console.log('DNS List:', dnsList);

    const newZone = await client.dns.addZone(12345, 'example.com');
    console.log('New Zone:', newZone);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
```

## Configuration

Make sure to replace `'your_username'` and `'your_password'` with your actual Time4VPS API credentials.

## API

### DNS

#### `listDNS()`

Returns a list of all DNS records.

```typescript
const dnsList = await client.dns.listDNS();
console.log(dnsList);
```

#### `addZone(serviceId: number, name: string)`

Adds a new DNS zone.

```typescript
const newZone = await client.dns.addZone(12345, 'example.com');
console.log(newZone);
```

#### `getZoneDetails(serviceId: number, zoneId: number)`

Gets details of a specific DNS zone.

```typescript
const zoneDetails = await client.dns.getZoneDetails(12345, 1);
console.log(zoneDetails);
```

#### `deleteZone(serviceId: number, zoneId: number)`

Deletes a DNS zone.

```typescript
const deleteZoneResponse = await client.dns.deleteZone(12345, 1);
console.log(deleteZoneResponse);
```

#### `addRecord(serviceId: number, zoneId: number, record: DNSRecord)`

Adds a DNS record to a zone.

```typescript
const record = {
  id: '0',
  name: 'test',
  ttl: 3600,
  priority: 0,
  content: '192.168.1.2',
  type: 'A'
};
const addRecordResponse = await client.dns.addRecord(12345, 1, record);
console.log(addRecordResponse);
```

#### `editRecord(serviceId: number, zoneId: number, recordId: number, record: DNSRecord)`

Edits an existing DNS record.

```typescript
const updatedRecord = {
  id: '1',
  name: 'test-updated',
  ttl: 3600,
  priority: 0,
  content: '192.168.1.3',
  type: 'A'
};
const editRecordResponse = await client.dns.editRecord(12345, 1, 1, updatedRecord);
console.log(editRecordResponse);
```

#### `deleteRecord(serviceId: number, zoneId: number, recordId: number)`

Deletes a DNS record from a zone.

```typescript
const deleteRecordResponse = await client.dns.deleteRecord(12345, 1, 1);
console.log(deleteRecordResponse);
```

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request
