import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Backend() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 animate-fade-in">
          Backend Developer Roadmap 2025
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fade-in delay-100">
          A step-by-step guide to mastering backend development in 2025.
        </p>
      </header>

      {/* Tabs for Levels */}
      <Tabs defaultValue="basics" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 bg-gray-200 dark:bg-gray-800 p-1 rounded-lg animate-fade-in delay-200">
          <TabsTrigger
            value="basics"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
          >
            Basics
          </TabsTrigger>
          <TabsTrigger
            value="intermediate"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
          >
            Intermediate
          </TabsTrigger>
          <TabsTrigger
            value="advanced"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
          >
            Advanced
          </TabsTrigger>
        </TabsList>

        {/* Basics Tab */}
        <TabsContent value="basics" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                1. Basics
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Master the fundamentals of backend development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* Node.js */}
                <AccordionItem value="nodejs">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Node.js
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Introduction to Node.js (event-driven architecture)
                      </li>
                      <li>Node.js Core Modules (fs, http, path, etc.)</li>
                      <li>NPM (Node Package Manager)</li>
                      <li>Creating a Simple HTTP Server</li>
                      <li>
                        Asynchronous Programming (callbacks, promises,
                        async/await)
                      </li>
                      <li>Event Loop and Non-Blocking I/O</li>
                      <li>Error Handling in Node.js</li>
                      <li>Debugging Node.js Applications</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Express.js */}
                <AccordionItem value="expressjs">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Express.js
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Introduction to Express.js</li>
                      <li>Routing (GET, POST, PUT, DELETE)</li>
                      <li>Middleware (custom middleware, error handling)</li>
                      <li>Request and Response Objects</li>
                      <li>Template Engines (EJS, Pug)</li>
                      <li>Serving Static Files</li>
                      <li>RESTful API Design</li>
                      <li>Error Handling in Express.js</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Databases */}
                <AccordionItem value="databases">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Databases
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Relational Databases (MySQL, PostgreSQL)</li>
                      <li>NoSQL Databases (MongoDB)</li>
                      <li>Connecting Node.js to Databases</li>
                      <li>CRUD Operations</li>
                      <li>ORM (Object-Relational Mapping)</li>
                      <li>Mongoose (MongoDB ODM)</li>
                      <li>Database Migrations</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* APIs */}
                <AccordionItem value="apis">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    APIs
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>REST APIs (GET, POST, PUT, DELETE)</li>
                      <li>API Design (endpoints, versioning, documentation)</li>
                      <li>Authentication (JWT, OAuth)</li>
                      <li>Rate Limiting and Throttling</li>
                      <li>API Testing (Postman, Insomnia)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Intermediate Tab */}
        <TabsContent value="intermediate" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                2. Intermediate
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Dive deeper into backend frameworks and advanced concepts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* Advanced Express.js */}
                <AccordionItem value="advanced-expressjs">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Advanced Express.js
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Modular Routing (Express Router)</li>
                      <li>File Uploads (Multer)</li>
                      <li>Authentication and Authorization (Passport.js)</li>
                      <li>Validation (Joi, Express Validator)</li>
                      <li>Error Handling Middleware</li>
                      <li>Logging (Winston, Morgan)</li>
                      <li>API Security Best Practices</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Nest.js */}
                <AccordionItem value="nestjs">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Nest.js
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Introduction to Nest.js</li>
                      <li>Modules, Controllers, and Providers</li>
                      <li>Dependency Injection</li>
                      <li>Middleware in Nest.js</li>
                      <li>Exception Filters</li>
                      <li>Pipes and Guards</li>
                      <li>TypeORM Integration</li>
                      <li>GraphQL with Nest.js</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Advanced Databases */}
                <AccordionItem value="advanced-databases">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Advanced Databases
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Database Transactions (ACID properties)</li>
                      <li>Database Replication (master-slave, sharding)</li>
                      <li>Database Scaling (vertical vs horizontal)</li>
                      <li>Indexing and Query Optimization</li>
                      <li>Database Migrations</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* API Security */}
                <AccordionItem value="api-security">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    API Security
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Authentication (JWT, OAuth)</li>
                      <li>Authorization (RBAC, ABAC)</li>
                      <li>Encryption (SSL/TLS, HTTPS)</li>
                      <li>Input Validation (sanitization, escaping)</li>
                      <li>Rate Limiting and Throttling</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Tab */}
        <TabsContent value="advanced" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                3. Advanced
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Explore advanced backend topics and best practices.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* Microservices */}
                <AccordionItem value="microservices">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Microservices
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Microservices Architecture (monolithic vs microservices)
                      </li>
                      <li>Service Discovery (Consul, Eureka)</li>
                      <li>API Gateway (Kong, Zuul)</li>
                      <li>Event-Driven Architecture (Kafka, RabbitMQ)</li>
                      <li>Containerization (Docker, Kubernetes)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Performance Optimization */}
                <AccordionItem value="performance-optimization">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Performance Optimization
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Database Optimization (indexing, query tuning)</li>
                      <li>Caching Strategies (Redis, Memcached)</li>
                      <li>Load Balancing (NGINX, HAProxy)</li>
                      <li>Content Delivery Networks (CDNs)</li>
                      <li>Asynchronous Processing (message queues)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
