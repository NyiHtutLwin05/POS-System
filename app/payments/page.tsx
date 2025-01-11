'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Search, CreditCard, DollarSign, Wallet } from 'lucide-react';

const transactions = [
  {
    id: 1,
    date: '2024-03-20',
    amount: 99.99,
    method: 'Credit Card',
    status: 'Completed',
    customer: 'John Doe',
  },
  {
    id: 2,
    date: '2024-03-20',
    amount: 45.50,
    method: 'Cash',
    status: 'Completed',
    customer: 'Jane Smith',
  },
  {
    id: 3,
    date: '2024-03-19',
    amount: 150.00,
    method: 'Digital Wallet',
    status: 'Completed',
    customer: 'Bob Johnson',
  },
];

export default function PaymentsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Payments & Transactions</h1>

      <div className="grid gap-6 mb-8 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234.50</div>
            <p className="text-xs text-muted-foreground">15 transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Card Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$890.00</div>
            <p className="text-xs text-muted-foreground">8 transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cash Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$234.50</div>
            <p className="text-xs text-muted-foreground">5 transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Digital Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$110.00</div>
            <p className="text-xs text-muted-foreground">2 transactions</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-10" />
            </div>
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Export</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.customer}</TableCell>
                  <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className="flex items-center">
                      {transaction.method === 'Credit Card' && <CreditCard className="mr-2 h-4 w-4" />}
                      {transaction.method === 'Cash' && <DollarSign className="mr-2 h-4 w-4" />}
                      {transaction.method === 'Digital Wallet' && <Wallet className="mr-2 h-4 w-4" />}
                      {transaction.method}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400">
                      {transaction.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}