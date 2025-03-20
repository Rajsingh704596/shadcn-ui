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

export default function AdvancedFullStack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 animate-fade-in">
          Advanced Full Stack Developer Roadmap 2025
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fade-in delay-100">
          A step-by-step guide to mastering advanced full stack development in
          2025.
        </p>
      </header>

      {/* Tabs for Levels */}
      <Tabs defaultValue="devops" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 bg-gray-200 dark:bg-gray-800 p-1 rounded-lg animate-fade-in delay-200">
          <TabsTrigger
            value="Ai-fullStack"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
          >
            Advance FullStack
          </TabsTrigger>

          <TabsTrigger
            value="devops"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
          >
            DevOps
          </TabsTrigger>
          <TabsTrigger
            value="cloud"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
          >
            Cloud
          </TabsTrigger>
          <TabsTrigger
            value="tools"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
          >
            Tools
          </TabsTrigger>
        </TabsList>

        {/* AI Integration Tab */}
        <TabsContent value="Ai-fullStack" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Advanced Full Stack Topics
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Master advanced topics for full-stack development and
                interviews.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* Performance Optimization */}
                <AccordionItem value="AdvanceFullStack">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Performance Optimization
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Frontend Optimization</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Lazy Loading</strong> : Load images and
                            components only when needed.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example: Use `React.lazy` for lazy loading
                                components.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Code Splitting</strong>: Split JavaScript
                            bundles to reduce initial load time.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use Webpack or Vite for code
                                splitting.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Minification</strong> : Minify CSS,
                            JavaScript, and HTML files.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use tools like Terser for JavaScript
                                minification.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Backend Optimization</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Caching</strong> : Use Redis or Memcached to
                            cache frequently accessed data.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Cache API responses to reduce database
                                load.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Database Optimization</strong> : Optimize
                            queries and use indexing.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use `EXPLAIN` in SQL to analyze query
                                performance.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Load Balancing</strong> : Distribute traffic
                            across multiple servers.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use NGINX or AWS Elastic Load
                                Balancer.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Debugging Tools */}
                <AccordionItem value="debugging-tools">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Debugging Tools
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Frontend Debugging</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Chrome DevTools</strong> : Debug JavaScript,
                            inspect DOM, and analyze performance.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use the Performance tab to identify
                                bottlenecks.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>React DevTools</strong> : Inspect React
                            component hierarchy and state.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Debug props and state in real-time.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Backend Debugging</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Postman</strong>: Test and debug APIs.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use Postman collections for automated
                                API testing.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Logging</strong> : Use tools like Winston or
                            Morgan for logging.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Log errors and requests for debugging.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* System Design */}
                <AccordionItem value="system-design">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    System Design
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>High-Level Design (HLD)</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Scalability</strong> : Design systems to
                            handle growth.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use horizontal scaling with load
                                balancers.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Reliability</strong>: Ensure systems are
                            fault-tolerant.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use replication and failover
                                mechanisms.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Low-Level Design (LLD)</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Class Diagrams</strong> : Define classes and
                            their relationships.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Design a parking lot system with
                                classes like `ParkingLot` and `Vehicle`.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Database Schema</strong> : Design tables and
                            relationships.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Normalize tables to reduce redundancy.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Advanced Web Development Concepts */}
                <AccordionItem value="advanced-web-dev">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Advanced Web Development Concepts
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Microservices</strong> :
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Benefits</strong>: Scalability, flexibility,
                            and independent deployment.
                            <ul className="ml-6 list-disc">
                              <li>
                                Example : Separate services for user
                                authentication and product management.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Event-Driven Architecture</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Use Cases</strong> : Real-time
                            notifications, order processing.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use Kafka or RabbitMQ for event
                                streaming.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>
                          CQRS (Command Query Responsibility Segregation)
                        </strong>
                        :
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Benefits</strong> : Improved scalability and
                            performance.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Use separate databases for reads and
                                writes.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Domain-Driven Design (DDD)</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            <strong>Core Concepts</strong>: Bounded contexts,
                            aggregates, and entities.
                            <ul className="ml-6 list-disc list-inside space-y-2">
                              <li>
                                Example : Define bounded contexts for user
                                management and product management.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                AI Integration
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Master AI integration in web development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* AI Tools */}
                <AccordionItem value="ai-tools">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    AI Tools
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>
                        <strong>OpenAI</strong> : ChatGPT, GPT-4 for natural
                        language processing.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice : Use fine-tuning for custom models.
                          </li>
                          <li>
                            Key Point: Integrate with chatbots for customer
                            support.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Hugging Face</strong> : Transformers and NLP
                        models.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice : Use pre-trained models for faster
                            development.
                          </li>
                          <li>
                            Key Point : Use pipelines for easy model deployment.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>TensorFlow.js</strong> : Machine learning in the
                        browser.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice : Use transfer learning for custom
                            models.
                          </li>
                          <li>Key Point : Optimize models for performance.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>AI APIs</strong> : OpenAI, Hugging Face, Google
                        AI.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice : Use rate limiting to manage API
                            costs.
                          </li>
                          <li>
                            Key Point : Monitor API usage for performance.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Best Practices</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Use AI responsibly and ethically.</li>
                          <li>Regularly update AI models for accuracy.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DevOps Tab */}
        <TabsContent value="devops" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                DevOps
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Master DevOps practices and tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* CI/CD Pipelines */}
                <AccordionItem value="ci-cd">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    CI/CD Pipelines
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>
                        <strong>Jenkins</strong> : Automate builds, tests, and
                        deployments.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Jenkins pipelines for declarative
                            CI/CD workflows.
                          </li>
                          <li>
                            Key Point: Integrate with GitHub/GitLab for
                            automatic triggers.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>GitHub Actions</strong> : Built-in CI/CD for
                        GitHub repositories.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use reusable workflows to reduce
                            duplication.
                          </li>
                          <li>
                            Key Point: Leverage matrix builds for multi-platform
                            testing.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>GitLab CI/CD</strong> : Integrated pipelines for
                        GitLab projects.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use caching to speed up builds.
                          </li>
                          <li>
                            Key Point: Implement auto-scaling runners for large
                            projects.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>CircleCI</strong> : Cloud-based CI/CD platform.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use orbs for reusable configurations.
                          </li>
                          <li>
                            Key Point: Enable parallel jobs for faster builds.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Travis CI</strong> : Continuous integration for
                        open-source projects.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use encrypted secrets for sensitive
                            data.
                          </li>
                          <li>
                            Key Point: Integrate with Docker for consistent
                            environments.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Containerization */}
                <AccordionItem value="containerization">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Containerization
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>
                        <strong>Docker</strong> : Containerize applications for
                        consistency.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use multi-stage builds to reduce
                            image size.
                          </li>
                          <li>
                            Key Point: Leverage Docker Compose for local
                            development.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Kubernetes</strong> : Orchestrate containers at
                        scale.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Helm for managing Kubernetes
                            applications.
                          </li>
                          <li>
                            Key Point: Implement auto-scaling for resource
                            efficiency.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Helm</strong> : Package manager for Kubernetes.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Helm charts for reusable
                            deployments.
                          </li>
                          <li>
                            Key Point: Version your Helm charts for consistency.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Best Practices</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Use container registries like Docker Hub or AWS ECR.
                          </li>
                          <li>
                            Monitor container performance with tools like
                            Prometheus.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Monitoring and Logging */}
                <AccordionItem value="monitoring-logging">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Monitoring and Logging
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Prometheus</strong> : Monitor and alert on
                        system metrics.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Best Practice: Use Grafana for visualization.</li>
                          <li>
                            Key Point: Set up alerts for critical metrics.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>ELK Stack</strong> : Centralized logging with
                        Elasticsearch, Logstash, and Kibana.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Logstash for log parsing and
                            enrichment.
                          </li>
                          <li>
                            Key Point: Archive old logs to reduce storage costs.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Splunk</strong> : Log management and analysis.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Splunk for real-time monitoring.
                          </li>
                          <li>
                            Key Point: Create dashboards for key performance
                            indicators.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Best Practices</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Centralize logs for easier debugging.</li>
                          <li>
                            Use structured logging for better searchability.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cloud Tab */}
        <TabsContent value="cloud" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Cloud Computing
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Master cloud computing platforms and services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* AWS */}
                <AccordionItem value="aws">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    AWS
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>EC2</strong> : Virtual servers in the cloud.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use auto-scaling groups for high
                            availability.
                          </li>
                          <li>
                            Key Point: Use spot instances for cost savings.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>S3</strong> : Scalable object storage.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Enable versioning for data
                            protection.
                          </li>
                          <li>
                            Key Point: Use lifecycle policies to manage storage
                            costs.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>RDS</strong> : Managed relational databases.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Best Practice: Enable automated backups.</li>
                          <li>
                            Key Point: Use read replicas for scaling read-heavy
                            workloads.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Lambda</strong> : Serverless computing.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Lambda for event-driven
                            architectures.
                          </li>
                          <li>
                            Key Point: Monitor Lambda performance with
                            CloudWatch.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Best Practices</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Use IAM roles for secure access management.</li>
                          <li>Enable CloudTrail for auditing API calls.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Azure */}
                <AccordionItem value="azure">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Azure
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2  ">
                      <li>
                        <strong>Virtual Machines</strong> : Scalable compute
                        resources.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use availability sets for high
                            availability.
                          </li>
                          <li>
                            Key Point: Use Azure Spot VMs for cost savings.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>App Services</strong> : Managed web apps.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use deployment slots for
                            zero-downtime deployments.
                          </li>
                          <li>
                            Key Point: Enable auto-scaling for traffic spikes.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Azure Functions</strong> : Serverless computing.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Durable Functions for stateful
                            workflows.
                          </li>
                          <li>Key Point: Monitor with Azure Monitor.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Best Practices</strong> :
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Use Azure Policy for governance.</li>
                          <li>
                            Enable Azure Security Center for threat protection.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Google Cloud */}
                <AccordionItem value="google-cloud">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Google Cloud
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>
                        <strong>Compute Engine</strong> : Virtual machines.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use managed instance groups for
                            scaling.
                          </li>
                          <li>
                            Key Point: Use preemptible VMs for cost savings.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Cloud Storage</strong> : Object storage.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use lifecycle rules for data
                            management.
                          </li>
                          <li>
                            Key Point: Enable versioning for data protection.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Cloud Functions</strong> : Serverless computing.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Cloud Functions for event-driven
                            workflows.
                          </li>
                          <li>Key Point: Monitor with Cloud Monitoring.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Best Practices</strong> :
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Use IAM for access control.</li>
                          <li>Enable Cloud Audit Logs for auditing.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tools Tab */}
        <TabsContent value="tools" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Tools
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Master the tools used in modern web development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* Project Management */}
                <AccordionItem value="project-management">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Project Management
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>
                        <strong>Jira</strong> : Issue tracking and project
                        management.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Agile boards for sprint planning.
                          </li>
                          <li>
                            Key Point: Integrate with Confluence for
                            documentation.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Trello</strong> : Kanban boards for task
                        management.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use labels and due dates for
                            organization.
                          </li>
                          <li>
                            Key Point: Integrate with Slack for notifications.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Asana</strong> : Task and project management.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use templates for recurring projects.
                          </li>
                          <li>
                            Key Point: Use timelines for project planning.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>ClickUp</strong> : All-in-one productivity tool.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use custom views for task
                            organization.
                          </li>
                          <li>
                            Key Point: Integrate with time tracking tools.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Best Practices</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Use automation to reduce manual work.</li>
                          <li>Regularly review and update project status.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Collaboration */}
                <AccordionItem value="collaboration">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Collaboration
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>
                        <strong>Slack</strong>: Team communication.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use channels for organized
                            communication.
                          </li>
                          <li>
                            Key Point: Integrate with tools like GitHub and
                            Jira.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Microsoft Teams</strong> : Collaboration and
                        meetings.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Teams for video conferencing and
                            file sharing.
                          </li>
                          <li>
                            Key Point: Integrate with Office 365 for
                            productivity.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Zoom</strong> : Video conferencing.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use breakout rooms for smaller
                            discussions.
                          </li>
                          <li>
                            Key Point: Record meetings for future reference.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Google Workspace</strong> : Collaboration tools.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use Google Drive for file storage and
                            sharing.
                          </li>
                          <li>Key Point: Use Google Meet for video calls.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Best Practices</strong> :
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Use shared calendars for scheduling.</li>
                          <li>Regularly clean up old files and messages.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Development Tools */}
                <AccordionItem value="development-tools">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Development Tools
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2 ">
                      <li>
                        <strong>VS Code</strong> : Code editor.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use extensions like Prettier and
                            ESLint.
                          </li>
                          <li>
                            Key Point: Use integrated terminal for faster
                            workflows.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>WebStorm</strong> : IDE for JavaScript.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Best Practice: Use code refactoring tools.</li>
                          <li>
                            Key Point: Integrate with version control systems.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Postman</strong> : API testing.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use collections for organizing API
                            requests.
                          </li>
                          <li>
                            Key Point: Automate tests with Postman scripts.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Insomnia</strong> : API testing and debugging.
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>
                            Best Practice: Use environments for different API
                            stages.
                          </li>
                          <li>
                            Key Point: Use GraphQL support for modern APIs.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Best Practices</strong>:
                        <ul className="ml-6 list-disc list-inside space-y-2">
                          <li>Use version control for all code changes.</li>
                          <li>Regularly update tools and plugins.</li>
                        </ul>
                      </li>
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
