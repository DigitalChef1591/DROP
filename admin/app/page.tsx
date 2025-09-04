import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity, Database, Settings, TestTube, Users, Zap } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">DropMan Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your Discord drop monitoring system
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Sources Overview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sources</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last week
            </p>
            <div className="mt-4">
              <Link href="/sources">
                <Button variant="outline" size="sm">
                  Manage Sources
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Badge variant="default" className="bg-green-500">
                Healthy
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              All monitors running
            </p>
            <div className="mt-4">
              <Link href="/health">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Alerts</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              In the last 24 hours
            </p>
            <div className="mt-4">
              <Button variant="outline" size="sm" disabled>
                View Logs
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link href="/sources/new">
                <Button className="w-full" variant="default">
                  <Database className="mr-2 h-4 w-4" />
                  Add Source
                </Button>
              </Link>
              
              <Button className="w-full" variant="outline">
                <TestTube className="mr-2 h-4 w-4" />
                Test Post
              </Button>
              
              <Link href="/health">
                <Button className="w-full" variant="outline">
                  <Activity className="mr-2 h-4 w-4" />
                  System Status
                </Button>
              </Link>
              
              <Button className="w-full" variant="outline" disabled>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Source Types Overview */}
        <Card className="md:col-span-2 lg:col-span-2">
          <CardHeader>
            <CardTitle>Source Types</CardTitle>
            <CardDescription>
              Distribution of monitoring sources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Shopify</Badge>
                  <span className="text-sm text-muted-foreground">8 sources</span>
                </div>
                <div className="w-24 bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">RSS</Badge>
                  <span className="text-sm text-muted-foreground">3 sources</span>
                </div>
                <div className="w-24 bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Sitemap</Badge>
                  <span className="text-sm text-muted-foreground">1 source</span>
                </div>
                <div className="w-24 bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '8%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest system events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">2m ago</span>
                <span>Nike SNKRS posted alert</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-muted-foreground">5m ago</span>
                <span>New source added</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-muted-foreground">12m ago</span>
                <span>Rate limit hit on target.com</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">18m ago</span>
                <span>GPU drop detected</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
