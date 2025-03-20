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

export default function DSARoadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 animate-fade-in">
          Data Structures & Algorithms Roadmap 2025
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fade-in delay-100">
          A step-by-step guide to mastering DSA from beginner to advanced level.
        </p>
      </header>

      {/* Tabs for Levels */}
      <Tabs defaultValue="basics" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4 bg-gray-200 dark:bg-gray-800 p-1 rounded-lg animate-fade-in delay-200">
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
          <TabsTrigger
            value="tools"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
          >
            Tools & Platforms
          </TabsTrigger>
        </TabsList>

        {/* Basics Tab */}
        <TabsContent value="basics" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Basics of DSA
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Learn the fundamentals of Data Structures and Algorithms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* Time & Space Complexity */}
                <AccordionItem value="complexity">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Time & Space Complexity
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Big-O Notation</strong>: Understand time and
                        space complexity.
                        <ul className="ml-6 list-disc">
                          <li>
                            Best Practice: Analyze algorithms using Big-O.
                          </li>
                          <li>Key Point: Focus on worst-case scenarios.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Common Complexities</strong>:
                        <ul className="ml-6 list-disc">
                          <li>
                            O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ).
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Arrays */}
                <AccordionItem value="arrays">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Arrays
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Basics</strong>: Fixed-size, dynamic arrays.
                        <ul className="ml-6 list-disc">
                          <li>
                            Best Practice: Use dynamic arrays (e.g., Python
                            lists).
                          </li>
                          <li>Key Point: Understand indexing and resizing.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Common Problems</strong>:
                        <ul className="ml-6 list-disc">
                          <li>
                            Two-pointer technique, sliding window, prefix sum.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Strings */}
                <AccordionItem value="strings">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Strings
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Basics</strong>: String manipulation, encoding.
                        <ul className="ml-6 list-disc">
                          <li>Best Practice: Use built-in string methods.</li>
                          <li>Key Point: Understand Unicode and ASCII.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Common Problems</strong>:
                        <ul className="ml-6 list-disc">
                          <li>Palindrome, anagrams, substring search.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Stacks & Queues */}
                <AccordionItem value="stacks-queues">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Stacks & Queues
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Basics</strong>: LIFO (Stack) and FIFO (Queue).
                        <ul className="ml-6 list-disc">
                          <li>
                            Best Practice: Use arrays or linked lists to
                            implement.
                          </li>
                          <li>
                            Key Point: Understand applications like undo/redo.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Common Problems</strong>:
                        <ul className="ml-6 list-disc">
                          <li>Balanced parentheses, queue using stacks.</li>
                        </ul>
                      </li>
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
                Intermediate DSA
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Dive deeper into advanced data structures and algorithms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* Linked Lists */}
                <AccordionItem value="linked-lists">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Linked Lists
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Types</strong>: Singly, doubly, circular linked
                        lists.
                        <ul className="ml-6 list-disc">
                          <li>
                            Best Practice: Use dummy nodes for edge cases.
                          </li>
                          <li>Key Point: Understand pointer manipulation.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Common Problems</strong>:
                        <ul className="ml-6 list-disc">
                          <li>Reverse a linked list, detect cycles.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Trees */}
                <AccordionItem value="trees">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Trees
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Types</strong>: Binary trees, BST, AVL,
                        Red-Black trees.
                        <ul className="ml-6 list-disc">
                          <li>
                            Best Practice: Use recursion for tree traversals.
                          </li>
                          <li>Key Point: Understand balancing in BST.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Common Problems</strong>:
                        <ul className="ml-6 list-disc">
                          <li>Inorder traversal, LCA, diameter of a tree.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Graphs */}
                <AccordionItem value="graphs">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Graphs
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Basics</strong>: Directed, undirected, weighted
                        graphs.
                        <ul className="ml-6 list-disc">
                          <li>
                            Best Practice: Use adjacency lists or matrices.
                          </li>
                          <li>Key Point: Understand BFS and DFS.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Common Problems</strong>:
                        <ul className="ml-6 list-disc">
                          <li>
                            Shortest path, topological sorting, cycle detection.
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

        {/* Advanced Tab */}
        <TabsContent value="advanced" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Advanced DSA
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Master advanced topics for competitive programming and
                interviews.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* Dynamic Programming */}
                <AccordionItem value="dp">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Dynamic Programming
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Basics</strong>: Memoization, tabulation.
                        <ul className="ml-6 list-disc">
                          <li>
                            Best Practice: Start with Fibonacci and knapsack
                            problems.
                          </li>
                          <li>Key Point: Identify overlapping subproblems.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Common Problems</strong>:
                        <ul className="ml-6 list-disc">
                          <li>Longest common subsequence, 0/1 knapsack.</li>
                        </ul>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Backtracking */}
                <AccordionItem value="backtracking">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Backtracking
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Basics</strong>: Recursive problem-solving.
                        <ul className="ml-6 list-disc">
                          <li>
                            Best Practice: Use pruning to optimize solutions.
                          </li>
                          <li>
                            Key Point: Solve problems like N-Queens, Sudoku.
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

        {/* Tools & Platforms Tab */}
        <TabsContent value="tools" className="animate-fade-in delay-300">
          <Card className="mt-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Tools & Platforms
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Platforms and tools to practice and master DSA.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {/* Coding Platforms */}
                <AccordionItem value="coding-platforms">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Coding Platforms
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>LeetCode</strong>: Practice interview questions.
                        <ul className="ml-6 list-disc">
                          <li>
                            Best Practice: Focus on top interview questions.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>HackerRank</strong>: Beginner-friendly
                        challenges.
                      </li>
                      <li>
                        <strong>Codeforces</strong>: Competitive programming
                        contests.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Tools */}
                <AccordionItem value="tools">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 transition-colors duration-300">
                    Tools
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>VS Code</strong>: Code editor with DSA plugins.
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
