'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Printer, Monitor, Calculator, Wifi, CheckCircle2, XCircle } from 'lucide-react';

const devices = [
  {
    id: 1,
    name: 'Receipt Printer',
    type: 'Printer',
    status: 'Connected',
    lastActive: '2 mins ago',
  },
  {
    id: 2,
    name: 'Cash Drawer',
    type: 'Drawer',
    status: 'Connected',
    lastActive: '5 mins ago',
  },
  {
    id: 3,
    name: 'Barcode Scanner',
    type: 'Scanner',
    status: 'Disconnected',
    lastActive: '1 hour ago',
  },
];

export default function HardwarePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Hardware Management</h1>

      <div className="grid gap-6 mb-8 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Connected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Disconnected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Network Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Wifi className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-lg">Online</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Connected Devices</CardTitle>
              <Button>
                Add Device
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.map((device) => (
                  <TableRow key={device.id}>
                    <TableCell>
                      <div className="flex items-center">
                        {device.type === 'Printer' && <Printer className="mr-2 h-4 w-4" />}
                        {device.type === 'Drawer' && <Calculator className="mr-2 h-4 w-4" />}
                        {device.type === 'Scanner' && <Monitor className="mr-2 h-4 w-4" />}
                        {device.name}
                      </div>
                    </TableCell>
                    <TableCell>{device.type}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {device.status === 'Connected' ? (
                          <>
                            <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                            <span className="text-green-600">Connected</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="mr-2 h-4 w-4 text-red-600" />
                            <span className="text-red-600">Disconnected</span>
                          </>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{device.lastActive}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">Configure</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}