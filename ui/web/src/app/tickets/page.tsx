'use client'

import React, { useState } from 'react'
import { Bell, Layout, MoreVertical, Plus, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TicketDetails from '@/app/tickets/ticketDetails'

interface Ticket {
  id: number
  subject: string
  status: 'Open' | 'In Progress' | 'Closed'
  lastUpdate: string
}

interface SentTicket extends Ticket {
  company: string
}

interface ReceivedTicket extends Ticket {
  from: string
  service: string
}

export default function TicketingUI() {
  const [activeTab, setActiveTab] = useState<'sent' | 'received'>('sent')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState('all')
  const [selectedTicket, setSelectedTicket] = useState<ReceivedTicket | null>(null)

  const sentTickets: SentTicket[] = [
    { id: 1, company: 'TechCorp', subject: 'Account Access Issue', status: 'Open', lastUpdate: '2 hours ago' },
    { id: 2, company: 'CloudSoft', subject: 'Billing Inquiry', status: 'In Progress', lastUpdate: '1 day ago' },
    { id: 3, company: 'DataFlow', subject: 'Feature Request', status: 'Closed', lastUpdate: '3 days ago' },
    { id: 4, company: 'SecureNet', subject: 'Security Concern', status: 'Open', lastUpdate: '5 hours ago' },
    { id: 5, company: 'DevOps Inc', subject: 'Integration Problem', status: 'In Progress', lastUpdate: '2 days ago' },
  ]

  const receivedTickets: ReceivedTicket[] = [
    { id: 1, from: 'Alice Johnson', subject: 'API Documentation Query', status: 'Open', lastUpdate: '1 hour ago', service: 'API Gateway' },
    { id: 2, from: 'Bob Smith', subject: 'Subscription Upgrade', status: 'In Progress', lastUpdate: '3 hours ago', service: 'Billing Service' },
    { id: 3, from: 'Charlie Brown', subject: 'Data Migration Assistance', status: 'Closed', lastUpdate: '2 days ago', service: 'Data Pipeline' },
    { id: 4, from: 'Diana Prince', subject: 'Custom Integration Request', status: 'Open', lastUpdate: '4 hours ago', service: 'API Gateway' },
    { id: 5, from: 'Ethan Hunt', subject: 'Performance Optimization', status: 'In Progress', lastUpdate: '1 day ago', service: 'Compute Engine' },
  ]

  const services = ['All', 'API Gateway', 'Billing Service', 'Data Pipeline', 'Compute Engine']

  const filteredSentTickets = sentTickets.filter(ticket => 
    ticket.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredReceivedTickets = receivedTickets.filter(ticket => 
    (ticket.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedService === 'all' || ticket.service === selectedService)
  )

  const getStatusColor = (status: Ticket['status']) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-800'
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'closed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-blue-100 text-blue-800'
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <div className="flex items-center space-x-4">
          <Layout className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Ticketing System</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 overflow-hidden p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Tickets</h2>
            <p className="text-sm text-muted-foreground">Manage your support tickets</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Ticket
          </Button>
        </div>
        <Tabs defaultValue="sent" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="sent" onClick={() => setActiveTab('sent')}>Sent</TabsTrigger>
              <TabsTrigger value="received" onClick={() => setActiveTab('received')}>Received</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tickets..."
                className="w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {activeTab === 'received' && (
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service.toLowerCase()}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <TabsContent value="sent" className="space-y-4">
            <ScrollArea className="h-[calc(100vh-250px)]">
              {filteredSentTickets.map((ticket) => (
                <Card key={ticket.id} className="mb-4">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{ticket.subject}</CardTitle>
                      <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                    </div>
                    <CardDescription>Sent to {ticket.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Last updated {ticket.lastUpdate}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">View Details</Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Update Status</DropdownMenuItem>
                        <DropdownMenuItem>Add Comment</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Close Ticket</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardFooter>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="received" className="space-y-4">
            {selectedTicket ? (
              <TicketDetails ticket={selectedTicket} onBack={() => setSelectedTicket(null)} />
            ) : (
              <ScrollArea className="h-[calc(100vh-250px)]">
                {filteredReceivedTickets.map((ticket) => (
                  <Card key={ticket.id} className="mb-4">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{ticket.subject}</CardTitle>
                        <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                      </div>
                      <CardDescription>From {ticket.from} • {ticket.service}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Last updated {ticket.lastUpdate}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" onClick={() => setSelectedTicket(ticket)}>View Details</Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Update Status</DropdownMenuItem>
                          <DropdownMenuItem>Assign to Team</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Close Ticket</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardFooter>
                  </Card>
                ))}
              </ScrollArea>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}