# Chapter 3: Searching Techniques (Uninformed, Informed, Game Playing)


## Slide 1

       Chap 3:
 Searching Techniques

Lecturer : Sujan Shrestha


## Slide 2

What we will cover ?

        • Ideas in searching
        • Searching tree representation
        • Uninformed and informed search
        • Game playing search


## Slide 3

 Problem as a State Space Search

• To build as system to solve a particular problem, we need:
   • Define the problem: must include precise specifications
     ~ initial solution & final solution.
   • Analyze the problem: select the most important
     features that can have an immense impact.
   • Isolate and represent : convert these important features
     into knowledge representation.
   • Problem solving technique(s): choose the best
     technique and apply it to particular problem.


## Slide 4

 Important Terms
• Search space  possible conditions and solutions.
• Initial state  state where the searching process started.
• Goal state  the ultimate aim of searching process.
• Problem space  “what to solve”
• Searching strategy strategy for controlling the search.
• Search tree  tree representation of search space, showing
  possible solutions from initial state.


## Slide 5

Example: The Bridges of Konigsberg Problem


                          •Classical graph
                          applications.
                          •Introduced by Leonhard
                          Euler.
                          •Problem: Can a person
                          walk around the city
                          crosses each bridge
                          exactly once?


## Slide 6

Example: The Bridges of Konigsberg
Problem (cont)
                                          A

                                              b6
                          b1
                                    b3
                                         b5        C
                         B
                                    b4
                                              b7
                               b2
                                              D

               Predicates: Connect (B, C, b5)


## Slide 7

• For a shape to be traversable :
- All vertices are of even degree
OR
- Exactly two vertices are of odd order and the rest are even


## Slide 8

 Searching for Solution
•Search through state space (explicitly using searching
tree).
•Node expansion :- generating new node related to previous
nodes.
•Concepts:
   •State :- conditions in which the node corresponds.
   •Parent node :- the superior node
   •Path cost :- the cost, from initial to goal state.
   •Depth:- number of steps along the path from initial state


## Slide 9

           Node expansion

Starting
position




                            goal
                            position


## Slide 10

Node expansion (initial)


## Slide 11

Node expansion (expanding Arad)


## Slide 12

Node expansion (expanding Sibiu)


## Slide 13

       Measuring Searching Performance
•The output from problem-solving (searching) algorithm is
either FAILURE or SOLUTION.
•Four ways:
   •Completeness : is guaranteed to find a solution?
   •Optimality: does it find optimal solution ?
   •Time complexity: how long?
   •Space complexity: how much memory?
      •Complexity : branching factor (b), depth (d), and
      max. depth (m)


## Slide 14

            Searching Strategies

•Blind (Uninformed) search           •Heuristic (Informed) search 
• traversing the search space until
                                      • search process takes place by
the goal nodes is found without
                                      traversing search space with applied
information (might be doing
                                      rules (information).
exhaustive search).
                                      •There is no guarantee that solution
•Guarantees solution.                 is found.
                                      •Quick Solution
•Time Consuming

•More Complexity (Time, Space)
                                      • Less Complexity (Time, Space)


•Techniques : Breadth First           •Techniques: Greedy Best First
Uniform Cost ,Depth first,            Search, A* Algorithm
Interative Deepening search


## Slide 15

Complexity



    (Number of nodes)N = 1 + b + b2 + … + bd
    Multiplying both sides by b
    or   N*b = b + b2 + b3 + …… + bd + bd+1
    Subtracting 1st equation from 2nd
    or       (b -1) N = bd+1 -1
    or       N = (bd+1 -1) / (b -1) = bd+1


## Slide 16

• Visiting : To select a node
• Exploring : finding the children of a selected node


## Slide 17

Blind Search : Breadth First Search

      1                          2




          3                     4


## Slide 18

           Queue
Enqueue                        dequeue


 Print A              C B Print A, inserts its child in the queue

 Print B           E D C Print B, inserts its child in the queue

 Print C        G F E D Print C, inserts its child in the queue

 Print D           G F E Print D, inserts its child in the queue

 Print E              G F Print E, inserts its child in the queue

 Print F                 G Print F, inserts its child in the queue

 Print G                    Print G, inserts its child in the queue


       Flow pattern: ABCDEFG


## Slide 19

         Blind Search : Breadth First Search (BFS)

•Strategy ~ search all the nodes expanded at given depth
before any node at next level.
•Concept : First In First Out (FIFO) queue.
•Complete ?: Yes with finite b (branch).
•Complexity: bd * b = bd+1
•Space : similar to complexity – keep nodes in every memory
•Optimal ? = Yes (if cost are same for each node)


## Slide 20

Blind Search : Depth First Search (DFS)


        1            2                    3




    4                5                    N+1

                           …….


## Slide 21

        Visiting list A             A,B  A,B,D                 A,B,D,E
              Push       Push       Push   Pop          Push      Pop    Pop



Stack


                                     D                   E
                          B          B            B      B        B
              A           A      A             A         A       A       A
        Pop       Pop         Push           Pop        Push    Push




                                G                       F
                     C          C             C         C         C
        A            A          A             A         A         A

            A,B,D,E,C,F,G                             A,B,D,E,C

                                          A,B,D,E,C,F


## Slide 22

         Blind Search : Depth First Search (DFS)

•Strategy ~ search all the nodes expanded in deepest path.
•Last In First Out concept.
•Complete ?: No
•Complexity:
•Space : O(bm) – b ; branching factor, m ; max. depth
•Optimality ? : No


## Slide 23

Blind Search : Depth Limited
Search (DLS)


## Slide 24

Blind Search : Depth Limited Search
(DLS)
    •Strategy ~ search all the nodes expanded in deepest
     path.
    •Last In First Out concept.
    •Complete ?: No
    •Complexity: bl
    •Space : O(bl) – b ; branching factor, l ; limited depth
    •Optimality ? : No


## Slide 25

                       Blind Search : Iterative Deepening DFS
                       (ID-DFS)



Limit =2

                       A                                       A                                           A                                           A

               B               C                       B               C                           B               C                           B               C

           D       E       F       G               D       E       F       G               D           E       F           G           D           E       F       G




                                   A                                           A                                                       A

                           B               C                           B               C                                       B               C

                       D       E       F       G                   D       E       F           G                       D           E       F       G


## Slide 26

TIN 5013: Artificial Intelligence


## Slide 27

         Blind Search : Iterative Deepening DFS
         (ID-DFS)
•Strategy ~ combines DFS with best depth limits.
•Gradually increase the limit; L=0, L=1… and so on.
•Complete ?: Yes (if b is finite)
•Complexity: bd
•Space : bd
•Optimality ? : yes (if path costs are all identical)


## Slide 28

  Comparison of uninformed searches

Parameters         BFS    DFS   DLS   DFID



Completeness       Yes    No    No    Yes



Optimality         Yes    No    No    Yes



Time Complexity    bd+1   bm    bl    bd



Space Complexity   bd+1   bm    bl    bd


## Slide 29

    Solve the given problem with bfs, dfs, dls and id-dfs(dfid)



                S

                                D
A

                      C
           B                           E




H              G1           F          G2


## Slide 30

      Solve the given problem with bfs, dfs, dls=3 and id-dfs (dfid). While
      exploring select in alphabetical order



                        HIM                                                KAN
                                            EVE
      KWO
                                                               NEC

                        LEC

                                          PUL                                    SAG

                                                         JEC
                                                                     ADV
DHA
             CHI                      THA
                                                                           KEC
WRC


## Slide 31

                                                                                                                        Visited list
Uniform Cost search                                                                                                     S      S,A,D,B,C
                     S                   1
            5                                                                                                              S,A S,A,D
                                                                                                           S                       S,A,D,B
                                     6           D                                         5                            6     S,A,D,B,C,E
                9            6
    A       3                                            2                                             9                       D
                                             2                                                                                       6
                         1                                                     A                                           2
        2                        C                                                     5                                             2
                B                                            E                     3                       B                     C       E
                                                                                                                    9                8
                                                 2                                                                                            8
9                                                                    9
                         5           7                           7             B        1
                                                                                                                        5        7
                                                                               8               C                                              7
    G1              G2                               8               G1
                                             F           G3
                                                                                                   9
                                                                          14                                    G2                           G3
                                                                                                                             F
                                                                                                               13
                                                                                                                            15           15




                                                                                       Now G2 has the lowest so we stop
                                                                                       S,A,D,B,C,E,G2 is the visited list
                                                                                       and the path is S , D, C, G2


## Slide 32

Uniform cost search

• Search the node that has minimum cost.
• Expand the tree and see in the open list that has the minimum cost.
• Do step 2 until the goal node is has least cost in the open list.
• Open list  expanded list
• Closed list  visited list


## Slide 33

Hill Climbing Algorithm

     • Local Search Algorithm- have knowledge of local
       domain only
     • Greedy approach- select best option in next state
     • No backtrack- can’t track back even if it can’t find
       goal.
     • Steps are approached further by the help of heuristic
       value. Heuristic value indicates how far a goal node is
       from the current state


## Slide 34

     Hill Climbing search
1. Evaluate the initial state
2. Loop Until a solution is found or there are no operators left
    - select and apply a new operator
    - Evaluate the new state
    If goal then quit
    If better than current state then it is new state
                                                   New operator for
                                     A             heuristic function
                         4                       3 h1(n)    New operator for
                         3   B               C   2          heuristic function
                 4           3                         2 h2(n)
                                             3
                 4   D       2   E       F   4     G 5
                                                               0
                                                          H    0


## Slide 35

                Solve the given Block World Domain using hill climbing search

                                                                                 Goal State
                          Initial State                             A
                      A                                             D            Heuristic value = 5
                      B            D                                B
                      C            E                                C            E


                          h(n) = add 1 if the block is on correct block
                                 subtract 1 if block is not on correct block
                                         -1 A
                                          +1 B         D     -1         Heuristic value = +1
                                          +1   C       E    +1


                                                                                     D    -1
                             A    -1                              A +1               A    -1
         B   +1 D -1         B +1                            B +1 D -1               B    +1
 A   -1 C    +1 E +1         C +1 E +1         D -1          C    +1 E      +1       C    +1 E +1
Heuristic value = 1         Heuristic value = 1       Heuristic value = 3        Heuristic value = 1


## Slide 36

                                            A                   A
                                                                         Goal
                                    B       D        3          D        State
                                    C       E                   B
                                                                C           E

                                                                        B       -1
A  -1                A   +1                                             A +1
B +1 D      -1       D -1                B +1 D -1                      D       -1
C   +1 E    +1   C +1 E +1 B -1          C +1 E +1       A -1   C +1 E          +1
H(n) = +1          H(n) = +1             H(n) = +1                  H(n) = +1




                         Stuck in local maxima


## Slide 37

                                                                                      Goal State
                                                                             A
                H2(n) = add 1 for every block is on correct block
                         Subtract 1 if not                                   D    H(n) = 11
                                                                             B
                                            Initial State                    C        E
                                  -3    A
                                  +2    B              D    -2
                                                                      H(n) = -1
                                  +1    C              E    +1




                                                                                  D   -4
                         A -3                                         A -3        A   -3
       B   +2 D -2       B   +2                             B +2      D -2        B +2
A   -1 C   +1 E +1       C +1 E        +1 D       -1        C +1      E +1        C +1 E +1

     H(n)= +1                H(n)= 0                             H(n)= -1         H(n)= -3


## Slide 38

                                                                                                    Goal State
                                            B       +2 D -2                               A
                                 A       -1 C       +1 E +1        H(n)= +1               D
                                                                                          B
                                                                                          C          E



                                                       B   -3
B    -2          D -2                                  D      -2                              D    -2
A    -1 C +1     E +1            A -1 C         +1     E +1               A -1 C     +1 E          +1 B   -1
H(n) = -3                            H(n) = -4                                                H(n) = -2

                                                D    +3
D     -2   B    +2                              B    +2                                       B   +2
A    -1    C    +1 E       +1        A    -1 C +1          E +1           A   -1 D    -1 C        +1 E    +1

    H(n) = +1                               H(n) = +6                                         H(n) = +2

      -3 A                                                                      A    -3

      +2 B             D    -2                                     +2 B         D    -2 H(n) = -1
                                 H(n) = -1
      +1 C             E +1                                        +1 C         E    +1


## Slide 39

                                    D   +3                                       Goal State
                                                                      A
                                             H(n) = +6
                                    B   +2                            D
                           A    -1 C    +1 E +1                       B
                                                                      C          E



                       A       +4                                                    -4 E
D   +3                 D       +3                            D   +3                  +3 D
B   +2     A   -2      B       +2                 E     -2   B   +2                  +2 B
C   +1     E   +1      C       +1   E   +1        A     -1   C   +1       -1 A       +1 C
                                                      H(n) =+3                   H(n) =-1
H(n) =+5               H(n) =+11

                    Goal State


## Slide 40

Hill Climbing Problems
       Hill climbing cannot reach the optimal/best state(global
       maximum) if it enters any of the following regions :
       1.Local maximum : At a local maximum all neighboring
       states have a values which is worse than the current state.
       Since hill-climbing uses a greedy approach, it will not move
       to the worse state and terminate itself. The process will end
       even      though     a     better    solution    may      exist.
       To       overcome         local       maximum          problem
       : Utilize backtracking technique. Maintain a list of visited
       states. If the search reaches an undesirable state, it can
       backtrack to the previous configuration and explore a new
       path.
       2.Plateau : On plateau all neighbors have same value .
       Hence, it is not possible to select the best direction.
       To overcome plateaus : Make a big jump. Randomly
       select a state far away from the current state. Chances are
       that we will land at a non-plateau region
       1.Ridge : Any point on a ridge can look like peak because
       movement in all possible directions is downward. Hence the
       algorithm      stops    when      it  reaches     this    state.
       To overcome Ridge : In this kind of obstacle, use two or
       more rules before testing. It implies moving in several
       directions at once.


## Slide 41

Heuristic Search : Heuristic Function


## Slide 42

      Heuristic Search :Greedy-Best Search

•Tries to expand the node that is closest to the
goal.
•Evaluates using only heuristic function : f(n) = h(n)
•Possibly lead to the solution very fast.
•Problem ? ~ can end up in sub-optimal solutions
(doesn’t take notice of the distance it travels).
•Complexity and time:
•Complete & optimal ? : No (stuck in infinite loop)


## Slide 43

         Heuristic or informed Search :
                                                      h(n)=67
                         h(n)=34                        E
                                      A*
•Important aspect: formation of
heuristic function (h(n)).
                                             D           h(n)=9
•Heuristic function  additional            h(n)=12
knowledge to guide searching
strategy (short cut).                 B                C*
•Distance: heuristic function
                                  h(n)=24         h(n)=0
can be straight line distance
(SLD)


## Slide 44

    Heuristic Search :Greedy-Best Search


1


                                           176


## Slide 45

Heuristic Search :Greedy-Best Search


## Slide 46

     Heuristic Search : A* Algorithm

•Widely known algorithm – (pronounced as “A star”
search).
•Evaluates nodes by combining g(n) “cost to reach
the node” and h(n) “cost to get to the goal”
•f(n) = g(n) + h(n), f(n)  estimated cost of the
cheapest solution.
•Complete and optimal ~ since evaluates all paths.
•Time ? ~ a bit time consuming
•Space ? ~ lot of it!


## Slide 47

Heuristic Search : A* Algorithm


## Slide 48

Heuristic Search : A* Algorithm


## Slide 49

Heuristic Search : A* Algorithm


## Slide 50

Heuristic Search : A* Algorithm


## Slide 51

Heuristic Search : A* Algorithm


## Slide 52

A* Example
                                                   h’(n): The function h’ is an estimate of the additional cost
            f’(n) = g(n) + h’(n)                   of getting from the current node to a goal state.


 g(n) : The function g is a cost of getting from
 initial state to the current node.
                                             10

                                             A          6         4

                                   6                             E         4
                                              13        6                        1             0
                                        5                                               3
                         17   S              B                    2
                                                                               F              G
                                                       7
                                   10         4
                                                                 D         6

                                             C          6


## Slide 53

A* Example
                                          S
                           16                 14
                                         18
                           A                  C
                                          B
                      16                          18
                           E                  D
             31                     17
                  B             F


## Slide 54

A* Example
                                     S
                      16                 14
                                    18
                      A                  C
                                     B
                 16                          18
                      E                  D
                 17
                      F
             2                 19
             4
                 D         G


## Slide 55

A* Example
                             S
                  16                      14
                            18
                  A                       C
                             B
             16                               18
                  E                       D
                                                       23
                                 36
             17                       B            F
                  F
                       19
                  G


## Slide 56

A* Example
                                      S
                  16                                    14
                                     18
                  A                                     C
                                          B
             16                                             18
                                     14            15
                  E         D                  E        D
                                22        19
             17
                  F         C        F
                       19
                  G


## Slide 57

A* Example
                                 S
                  16                                   14

                  A             18
                                                   C
                                     B
             16
                                14            15
                  E         D             E
                                                       16
                                 27
             17
                  F                   A                F
                       19                         23        18

                  G                           D             G


## Slide 58

A* Example Solution
                             10

                             A    6   4

                    6                 E   4
                             13   6           1       0
                         5                        3
           17   S            B        2
                                              F       G
                                  7
                    10       4
                                      D   6

                             C    6


## Slide 59

The A* Algorithm
• This algorithm uses following functions:
   1. f’: Heuristic function that estimates the merits of each node we generate. f’
      represents an estimate of the cost of getting from the initial state to a goal state along
      with the path that generated the current node. f’ = g + h’
   2. g: The function g is a measure of the cost of getting from initial state to the current
      node.
   3. h’: The function h’ is an estimate of the additional cost of getting from the current
      node to a goal state.


• The algorithm also uses the lists: OPEN and CLOSED
   • OPEN - nodes that have been generated and have had the heuristic function applied to
     them but which have not yet been examined. OPEN is actually a priority queue in which
     the elements with the highest priority are those with the most promising value of the
     heuristic function.
   • CLOSED - nodes that have already been examined. We need to keep these nodes in
     memory if we want to search a graph rather than a tree, since whenever a new node is
     generated; we need to check whether it has been generated before.


## Slide 60

The A* Algorithm
Step 1:
   • Start with OPEN containing only initial node.
   • Set that node’s g value to 0, its h’ value to whatever it is, and its f’ value to h’+0 or h’.
   • Set CLOSED to empty list.


Step 2: Until a goal node is found, repeat the following procedure:
   • If there are no nodes on OPEN, report failure.
   • Otherwise select the node on OPEN with the lowest f’ value.
   • Call it BESTNODE. Remove it from OPEN. Place it in CLOSED.
   • See if the BESTNODE is a goal state. If so exit and report a solution.
   • Otherwise, generate the successors of BESTNODE but do not set the BESTNODE to point
     to them yet.


## Slide 61

The A* Algorithm
Step 3: For each of the SUCCESSOR, do the following:
   a. Set SUCCESSOR to point back to BESTNODE. These backwards links will make it
      possible to recover the path once a solution is found.
   b. Compute g(SUCCESSOR) = g(BESTNODE) + the cost of getting from BESTNODE to
      SUCCESSOR
   c. See if SUCCESSOR is the same as any node on OPEN. If so call the node OLD.
      i.     Check whether it is cheaper to get to OLD via its current parent or to SUCESSOR via BESTNODE by
             comparing their g values.
      ii.    If OLD is cheaper, then do nothing. If SUCCESSOR is cheaper then reset OLD’s parent link to point to
             BESTNODE.
      iii.   Record the new cheaper path in g(OLD) and update f‘(OLD).
      iv.    If SUCCESSOR was not on OPEN, see if it is on CLOSED. If so, call the node on CLOSED OLD and add
             OLD to the list of BESTNODE’s successors.
      v.     If SUCCESSOR was not already on either OPEN or CLOSED, then put it on OPEN and add it to the list
             of BESTNODE’s successors. Compute f’(SUCCESSOR) = g(SUCCESSOR) + h’(SUCCESSOR)


## Slide 62

Use greedy best first search and A* search to solve the given 8 puzzle
problem


## Slide 63

Adversarial search (game search)

• Mini-Max Algorithm
• Alpha-beta Algorithm


## Slide 64

• Game Playing is an important domain of Artificial Intelligence.
• There are two reasons that games appeared to be a good domain.
   1. They provide a structured task in which it is very easy to measure success or failure.
   2. They are easily solvable by a straightforward search from the starting state to a
      winning position.
• Games require only the domain knowledge such as the rules, legal moves and
  the conditions of winning or losing the game.
• In a two-player game, both the players try to win the game. So, both of them
  try to make the best move possible at each turn.
• To improve the effectiveness of a search based problem solving program two
  things can be done.
   1. Improve generate procedure so that only good moves are generated.
   2. Improve test procedure so that the best move will be recognized and explored first.


## Slide 65

Introduction
• If we use legal-move generator then the test procedure will have to look at
  each of them, because the test procedure must look at so many possibilities
  and it must be fast.
• The depth of the resulting tree or graph and its branching factor will be too
  large.
• Instead of legal-move generator we can use plausible-move generator in which
  only some small numbers of promising moves are generated.
• As the number of legal available moves increases it becomes increasingly
  important in applying heuristics to select only those moves that seem more
  promising.
• The performance of overall system can be improved by adding heuristic
  knowledge into both the generator and the tester.
• It is possible to search tree only ten or twenty moves deep then in order to
  choose the best move, the resulting board positions must be compared to
  discover which is most advantageous.


## Slide 66

Introduction
• This is done using static evaluation function, which uses whatever information
  it has to evaluate individual board position by estimating how likely they are to
  lead eventually to a win.
• The most common search technique in game playing is Minimax search
  procedure.                    17                                     MAX (player)

                   14                  17                  5                MIN (opponent)

        14      27                17        21             14       5        MAX (player)

    3   14    12        27   17        2    6    21   14        3   5   1   MIN (opponent)


## Slide 67

The MINIMAX Search Procedure
• The Minimax search is a depth first and depth limited procedure.
• The idea is to start at the current position and use the plausible-move
  generator to generate the set of possible successor positions.
• Now we can apply the static evaluation function to those positions and simply
  choose the best one.
• After doing so, we can back that value up to the starting position.
• Here, we assume that static evaluation function returns larger values to
  indicate good situations for us.
• So our goal is to maximize the value of the static evaluation function of the
  next board position.
• The opponents’ goal is to minimize the value of the static evaluation function.


## Slide 68

The MINIMAX Search Procedure
• The alternation of maximizing and minimizing at alternate ply when
  evaluations are to be pushed back up corresponds to the opposing strategies of
  the two players is called MINIMAX.

• It is recursive procedure that depends on two procedures :
   1. MOVEGEN(position, player)— The plausible-move generator, which returns a list of
      nodes representing the moves that can be made by Player in Position.
   2. STATIC(position, player) -- static evaluation function, which returns a number
      representing the goodness of Position from the standpoint of Player.
• To decide when recursive procedure should stop, variety of factors may
  influence the decision such as,
   • Has one side won?
   • How many ply have we already explored? Or how much time is left?
   • How stable is the configuration?


## Slide 69

Minimax – Algorithm
• Given a game tree, the optimal strategy can be determined from the minimax
  value of each node, which we write as MINIMAX(n).
• The minimax algorithm computes the minimax decision from the current state.
• It uses a simple recursive computation of the minimax values of each successor
  state, directly implementing the defining equations.
• The recursion proceeds all the way down to the leaves of the tree, and then
  the minimax values are backed up through the tree as the recursion unwinds.


## Slide 70

Minimax – Algorithm
• The minimax value of a node is the utility (for MAX) of being in the
  corresponding state, assuming that both players play optimally from there to
  the end of the game.
• The algorithm first recuses down to the three bottom left nodes and uses the
  UTILITY function on them to discover that their values are 3 and 14
  respectively.
• Then it takes the maximum of these values, 14, and returns it as the backed up
  value of parent node.
• A similar process gives the backed-up values of 27, 17, 21, 14 and 5
  respectively.


## Slide 71

Minimax – Algorithm
• Then it takes the minimum of these values 14, 17 and 5 respectively.
• Finally, we take the maximum of 14, 17, and 5 to get the backed-up value of 17
  for the root node.
• The minimax algorithm performs a complete depth-first exploration of the
  game tree.
• During every ply MAX prefers to move to a state of maximum value, whereas
  MIN prefers a state of minimum value.


## Slide 72

               MIN-MAX Algorithm

                             MAX
                                          A    2




          MIN                                              C   2
                    B        -1




MAX
      D         8                 E   -1               F   2        G       4




 H         I            J             K        L           M   N        O
 -1         8           -3                -1       2       1   -3       4


## Slide 73

Alpha-Beta Pruning Algorithm
• Cut-off search by exploring less no of nodes.
• Alpha is calculated at max level
• Beta is calculated at min level
• Initialize the initial value of alpha = - infinity and beta =
  +infinity
• Alpha tries to increase the value while beta tries to decrease
  the value.
• If alpha is greater than beta then prune the search tree.


## Slide 74

               Alpha-Beta Pruning Algorithm
                                       MAX       A    α = 3- ∞
                                                                 α>= β    α pruning
                                                                 So prune
               V=3
            MIN         B     β = +∞                                             C    β=2
                                                                                        ∞
                             β = 3 α>= β
                                    So prune,             V=2
     V=3      α=-∞                  β pruning
     MAX    D α
              α= 3                 E α = -7 ∞                        F   α=-∞               G   α
                                                                         α=2
              α>= β                                                       α>= β
              So prune,                                                   So prune
              α pruning                                               α pruning
V=3                    V =7                           V=2
MIN    H β=+ ∞ I       β = 2∞ J
                       β=+        β
                                  β==-7∞ K   β               L β=∞           M    β=∞ N β           O β
                                                                 β=2              β=1
   β=3
β=3 β=4                     β = 7β = 8                 β=2

 P     Q   R       S         T     U     V   W          X        Y       Z       a     b    c   d         e

3      4   2       1         7     8     9       10      2       11      1       12    14   9   13       16


## Slide 75

Alpha-Beta Pruning
• Alpha-beta pruning is a modified version of the Minimax algorithm. It is an
  optimization technique for the Minimax algorithm.
• In the Minimax search algorithm, the number of game states to be examined
  can be exponential in the depth of a tree.
• Hence there is a technique by which without checking each node of the game
  tree we can compute the correct Minimax decision, and this technique is called
  pruning.
• This involves two threshold parameter Alpha and beta for future expansion, so
  it is called alpha-beta pruning. It is also called as Alpha-Beta Algorithm.
• Alpha-beta pruning can be applied at any depth of a tree, and sometimes not
  only it prunes the tree leaves but also entire sub-tree.


## Slide 76

Alpha-Beta Pruning
• Alpha-beta pruning technique maintains two bounds:
   1. Alpha (𝜶): The best (highest-value) choice we have found so far at any point along the
      path of Maximizer. The initial value of alpha is -∞. A lower bound on best, i.e., Max
   2. Beta (𝜷): The best (lowest-value) choice we have found so far at any point along the
      path of Minimizer. The initial value of beta is +∞. An upper bound on what the
      opponent can achieve


• The Search proceeds maintaining 𝜶 and 𝜷
• Whenever 𝜶 ≥ 𝜷_𝒉𝒊𝒈𝒉𝒆𝒓, or 𝜷 ≤ 𝜶_𝒉𝒊𝒈𝒉𝒆𝒓, searching further at this node is
  irrelevant.
• In conclusion, Minimax with alpha beta pruning is a faster algorithm than the
  Minimax algorithm.


## Slide 77

Minimax with Alpha-beta Pruning – Example 1
                           Max   A


             Min   B             C                           D


       Max    E        F    G                            J       K
                                     H           I
                                                         3       8
              4        5    6


                                 L       M   N       O
                                 3       4   7       9


## Slide 78

Minimax with Alpha-beta Pruning – Example 2

   Max                                            A


   Min                B                           C                           D



   Max        E               F           G               H           I               J



          2       3       5       9   1       0       7       4   2       1       5       6


## Slide 79

Minimax with Alpha-beta Pruning – Example 3

                                                6                                                 MAX
                                                                                                  (player)
                        3                       6                       5                       MIN
                                                                                                (opponent
            5                               6               7       5               8           )
                                3                                                                 MAX
                                                                                                  (player)
    5               4               3   6           6           7   5           8           6   MIN
                                                                                                (opponent
                                                                                                )
5       6       7   4       5       3   6       6       9       7   5       9           8   6
                                                                                                  MAX
                                                                                                  (player)


## Slide 80

        MIN-MAX Algorithm


• Back-tracking Algorithm
• Assume you are player at Max position then, Max will try to maximize
  its utility (Best Move)
• Min will try to minimize utility(worst move)
• Time complexity = bd


## Slide 81

properties

• Back-tracking Algorithm
• Assume you are player at Max position then, Max will try to maximize
  its utility (Best Move)
• Min will try to minimize utility(worst move)
• Time complexity = bd/2


## Slide 82

Thank you
