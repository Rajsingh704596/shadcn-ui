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

export default function Frontend() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 animate-fade-in">
          Frontend Developer Roadmap 2025
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fade-in delay-100">
          A step-by-step guide to mastering frontend development in 2025.
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
                Master the fundamentals of frontend development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* HTML */}
                <AccordionItem value="html">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    HTML
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Semantic HTML (header, main, section, article, etc.)
                      </li>
                      <li>
                        Forms and Inputs (input types, validation,
                        accessibility)
                      </li>
                      <li>
                        Accessibility (ARIA roles, landmarks, keyboard
                        navigation)
                      </li>
                      <li>
                        SEO Basics (meta tags, alt attributes, structured data)
                      </li>
                      <li>
                        HTML5 APIs (localStorage, sessionStorage, geolocation)
                      </li>
                      <li>Canvas and SVG (graphics rendering)</li>
                      <li>Web Components (custom elements, shadow DOM)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* CSS */}
                <AccordionItem value="css">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    CSS
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Box Model (margin, padding, border, box-sizing)</li>
                      <li>Flexbox (alignment, spacing, responsive layouts)</li>
                      <li>Grid (grid-template, grid-gap, responsive grids)</li>
                      <li>
                        Responsive Design (media queries, mobile-first approach)
                      </li>
                      <li>CSS Variables (custom properties, theming)</li>
                      <li>Transitions and Animations (keyframes, transform)</li>
                      <li>CSS Preprocessors (SASS, LESS)</li>
                      <li>BEM Methodology (block, element, modifier)</li>
                      <li>
                        CSS Frameworks (Tailwind CSS, Bootstrap, Material UI)
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* JavaScript */}
                <AccordionItem value="javascript">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    JavaScript
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Variables (let, const, var)</li>
                      <li>Data Types (strings, numbers, objects, arrays)</li>
                      <li>Operators (arithmetic, comparison, logical)</li>
                      <li>
                        Functions (declaration, expressions, arrow functions)
                      </li>
                      <li>Scope (global, local, block scope)</li>
                      <li>DOM Manipulation (selectors, event listeners)</li>
                      <li>Event Handling (click, submit, keyboard events)</li>
                      <li>
                        ES6+ Features (destructuring, spread/rest, modules)
                      </li>
                      <li>Error Handling (try/catch, custom errors)</li>
                      <li>Asynchronous Programming (Promises, async/await)</li>
                      <li>Fetch API and AJAX (HTTP requests)</li>
                      <li>
                        Web APIs (localStorage, sessionStorage, geolocation)
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Version Control */}
                <AccordionItem value="version-control">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Version Control
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Git Basics (init, clone, commit, push, pull)</li>
                      <li>GitHub Workflow (fork, pull requests, issues)</li>
                      <li>Branching and Merging (feature branches, rebase)</li>
                      <li>Git Hooks (pre-commit, pre-push)</li>
                      <li>GitHub Actions (CI/CD pipelines)</li>
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
                Dive deeper into frameworks, state management, and APIs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* CSS Frameworks */}
                <AccordionItem value="css-frameworks">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    CSS Frameworks
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Tailwind CSS (utility-first, responsive design)</li>
                      <li>Bootstrap (grid system, components)</li>
                      <li>Material UI (components, theming)</li>
                      <li>Styled Components (CSS-in-JS)</li>
                      <li>Chakra UI (accessible components)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* JavaScript Frameworks */}
                <AccordionItem value="javascript-frameworks">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    JavaScript Frameworks
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>React.js (components, props, state, hooks)</li>
                      <li>Vue.js (Vuex, Vue Router)</li>
                      <li>Angular (services, dependency injection)</li>
                      <li>Svelte (reactive programming)</li>
                      <li>Next.js (SSR, static site generation)</li>
                      <li>Nuxt.js (Vue-based framework)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* State Management */}
                <AccordionItem value="state-management">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    State Management
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Redux (actions, reducers, store)</li>
                      <li>Context API (React)</li>
                      <li>Recoil (state atoms)</li>
                      <li>Zustand (lightweight state management)</li>
                      <li>MobX (reactive state management)</li>
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
                      <li>GraphQL (queries, mutations, subscriptions)</li>
                      <li>Axios and Fetch API (HTTP requests)</li>
                      <li>WebSockets (real-time communication)</li>
                      <li>gRPC (high-performance RPC framework)</li>
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
                Explore advanced topics like TypeScript, testing, and
                performance optimization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* TypeScript */}
                <AccordionItem value="typescript">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    TypeScript
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Static Typing (type annotations, interfaces)</li>
                      <li>Generics (reusable components)</li>
                      <li>Advanced Types (union, intersection, conditional)</li>
                      <li>Decorators (class and method decorators)</li>
                      <li>TypeScript with React (props, state, hooks)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Testing */}
                <AccordionItem value="testing">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Testing
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Unit Testing (Jest, Vitest)</li>
                      <li>End-to-End Testing (Cypress, Playwright)</li>
                      <li>Integration Testing (React Testing Library)</li>
                      <li>Mocking (API mocking, component mocking)</li>
                      <li>Test-Driven Development (TDD)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Performance Optimization */}
                <AccordionItem value="performance">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Performance Optimization
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Lazy Loading (React.lazy, Suspense)</li>
                      <li>Code Splitting (dynamic imports)</li>
                      <li>Webpack Optimization (tree shaking, minification)</li>
                      <li>Lighthouse Audits (performance metrics)</li>
                      <li>Image Optimization (WebP, lazy loading)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Progressive Web Apps (PWAs) */}
                <AccordionItem value="pwas">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Progressive Web Apps (PWAs)
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Service Workers (caching, offline support)</li>
                      <li>Web App Manifest (PWA metadata)</li>
                      <li>Push Notifications (real-time updates)</li>
                      <li>App Shell Architecture (fast loading)</li>
                      <li>Background Sync (offline data sync)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Web3 and Blockchain */}
                <AccordionItem value="web3">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Web3 and Blockchain
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Smart Contracts (Solidity, Ethereum)</li>
                      <li>Decentralized Apps (dApps)</li>
                      <li>Web3.js (blockchain interactions)</li>
                      <li>IPFS (decentralized storage)</li>
                      <li>Ethereum Development (Truffle, Hardhat)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* AI Integration */}
                <AccordionItem value="ai">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    AI Integration
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>AI-Powered Tools (ChatGPT, Copilot)</li>
                      <li>Machine Learning in the Browser (TensorFlow.js)</li>
                      <li>AI APIs (OpenAI, Hugging Face)</li>
                      <li>Natural Language Processing (NLP)</li>
                      <li>Computer Vision (OpenCV, TensorFlow.js)</li>
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
