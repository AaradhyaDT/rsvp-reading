# Chapter 2: Problem Solving and Search


## Slide 1

Chapter -2: Problem Solving
         methods

        Lecturer : Sujan Shrestha


## Slide 2

• Problem solving is a goal based agent system that finds sequence of actions
   that lead to desirable states from the initial state. - Four steps of problem
   solving are:
i. Goal Formulation: Helps to organize behavior by isolating and representing
the task knowledge necessary to solve problem.
ii. Problem Formulation: Define the problem precisely with initial states, final
state and acceptable solutions.
iii. Searching: Find the most appropriate techniques of sequence among all
possible techniques.
iv. Execution: Once the search algorithm returns a solution to the problem,
the solution is then executed by the agent.


## Slide 3

• State Space Representation - A state space essentially consists of a set of nodes
  representing each state of the problem, arcs between nodes representing the
  legal moves from one state to another, an initial state and a goal state.
• A problem can be defined by
- Initial state .
- Actions (Using successor function) .
- Goal test (to determine the goal state) .
- Path cost
A problem is when defined with these components is called well defined problem.
- The actions and rules should be defined in as general way as possible. If the
  specific rules are made, the rule set becomes very large.


## Slide 4

                        8
                        7
                                       h          h




                        6
                                  h                     h




                        5
- Eg; Chess world.                           H

                        4
                                  h                     h

                        3
                        2
                        1              h          h



                             1         2  3    4       5     6      7   8
- Let Current Position of Horse: (4,4) Rules for next possible position can be as: (2,3),(2,5),
  (3,2),(3,6),(5,2)(5,6),(6,3) and (6,5)
- Current position of the horse can be any other location, we have to define another rule to find next possible
  position. By doing so the rule set becomes very large.
• There for specific pattern should be described such as for above case the pattern rule can be as:
• Next possible Position: Current Position +/- ( (2 vertical + 1 Horizontal) or (1 vertical + 2 Horizontal) )
  position.
• When a problem is defined with all its states, it is said to be in complete state space.


## Slide 5

Constraints Satisfaction Problem
- A search procedure that operates in a space of constraints.
- Constraints are discovered and propagated as far as possible throughout the
   system.
- A guess about something is made and added as a new constraint.
- The problem can be described as a set of variables (X1, X2,………) and Constraints
   (C1, C2,……….) and set of domains (D1, D2,………..) where constraints are
   applicable to variables having some relation with the help of domain D.
- Constraint propagation terminates for one of two reasons.
i. Contradiction detected i.e. no solution consistent with known constraints.
ii. Propagation has run off stream and there are no further changes that can be
      made on the basis of current knowledge.


## Slide 6

Eg. Crypto-arithmetic
i. S E N D + M O R E = M O N E Y
ii. R I G H T + R I G H T = W R O N G
iii. W R O N G + W R O N G = R I G H T
iv. L O G I C + L O G I C = P R O L O G
v. C R O S S + R O A D S = D A N G E R
vi. B A S E + B A L L = G A M E S
vii. O N E + O N E = T W O
viii. O N E + O N E + T W O = F O U R
ix. K Y O T O + O S A K A = T O K Y O
x. A P P L E + G R A P E = C H E R R Y


## Slide 7

 Crypt-Arithmetic Rules
 • First letter must be non-zero.
 • Each variable must be unique.
 • Carry over must be taken into account if Nothing is mentioned on
   question.
 • Need to be careful about symbol of the operation.


Solve the given CSP assuming there are no carry over.


## Slide 8

                                                                 O          N       E
                                                      +          O          N       E
                                                                 T          W       O
• Set of Variables X ={O, N, E, T, W}
• Set of Domain D= {0,1,2,3,4,5,6,7,8,9}
• Set of Constraints C are
i. Starting Letters O, T must not be Zero.
ii. Each variable must be assigned uniquely.
iii. E + E = 10 * C1 + O
iv. N + N = 10 * C2 + W                        C3=0       C2=0       C1=0
                                                          O          N          E
v. O + O = 10 * C3 + T                         +          O          N          E
                                                          T          W          O


## Slide 9

• O must be even as it is result of 2E where E can be any number from 0
  to 9 i.e. 0,2,4,6,8 but 0 can’t be Zero because it violates constraints
  no. 1 and O can’t be 6,8 because it will give carry over in 3rd column.
  So O can be either 2 or 4. let’s say O = 2 with C2 as 0 which will result
  T = 4 and E = 1.
                C3=0   C2=0   C1=0
                       O=2    N      E=1
                +      O=2    N      E=1
                       T=4    W      O=2


• As 1st column doesn’t produce carry over, 2 * N = W, if we take N = 3
  then W = 6
                C3=0   C2=0   C1=0
                       O=2    N=3    E=1
                +      O=2    N=3    E=1
                       T=4    W=6    O=2


## Slide 10

       S      E      N      D                         1000 * S + 100 * E + 10 * N + D
+      M      O      R      E                +        1000 * M + 100 * O + 10 * R + E
M      O      N      E      Y                10000 * M + 1000 *O + 100*N + 10 * E + Y
C4     C3     C2     C1
       S      E      N      D
+      M      O      R      E
M      O      N      E      Y

• Set of variables are X = {S, E, N, D, M, O, R, Y}
• Set of Domains are D = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
• Set of Constraints are C =
i. Value of Variables must be unique.
ii. First value of word must not be Zero i.e. S = M = 0
iii. D + E = 10*C1 + Y
iv. N + R + C1 = 10 * C2 + E                            C4=1        C3       C2         C1
                                                                    S        E          N    D
v. E + O + C2 = 10 * C3 + N                             +           M=1      O          R    E
vi. S + M + C3 = 10 * C4 + O                            M=1         O        N          E    Y
vii. C4 = M


## Slide 11

• To begin, start in the 5th column. Since 9999 + 9999 < 20000, we must
  have M = 1.
                    C4=1   C3    C2     C1
                           S     E      N      D
                    +      M=1   O      R      E
                    M=1    O     N      E      Y




• Then go to the 4th column. Since 999 + 999 < 2000, we either have 1 +
  S + 1 = O + 10, or S + 1 = O + 10, meaning S = O + 8 or S = O + 9, and O =
  0 or 1. Since S is a single digit, and M = 1, we must have O = 0.
                    C4=1   C3    C2     C1
                           S     E      N      D
                    +      M=1   O=0    R      E
                    M=1    O=0   N      E      Y


• In the 3rd column, since E cannot equal N, we cannot have E + 0 = N.
  Thus we must have 1 + E + 0 = N. Since N cannot be 0 which is taken
  by O, we must also have E less than 9. So there cannot be carryover
  in this column, and the 2nd column must have carryover.


## Slide 12

                C4=1    C3=0    C2=1    C1
                        S       E       N         D
                +       M=1     O=0     R         E
                M=1     O=0     N       E         Y


• Returning to the 4th column (which has no carryover from the 3rd),
  we must have S + 1 = 10, which means S = 9.
               C4=1    C3=0    C2=1    C1
                       S=9     E       N      D
               +       M=1     O=0     R      E
               M=1     O=0     N       E      Y

• Now we know 1 + E = N, and there must be carryover from the 2nd
  column. So we have two cases: N + R = E + 10, or N + R + 1 = E + 10.
  We can substitute 1 + E = N in both cases to get (1 + E) + R = E + 10 –>
  R = 9 (but 9 is already taken), or we have 1 + E + R + 1 = E + 10 –> R =
  8. So we must have R = 8.          C4=1 C3=0   C2=1  C1=1
                                              S=9     E     N     D
                                        +     M=1     O=0   R=8   E
                                        M=1   O=0     N     E     Y


## Slide 13

• Now in the units column D + E = Y, and it must give carryover. Since Y
  cannot be 0 or 1, we need D + E ≥ 12. Since 9 and 8 are taken for S and R, we
  can have 5 + 7 = 12 or 6 + 7 = 13. So either D = 7 or E = 7.
• If E = 7, then E + 1 = N so N = 8–which is not possible since R = 8. So we must
  have D = 7, meaning E is either 5 or 6.
                   C4=1    C3=0    C2=1    C1=1
                           S=9     E       N       D=7
                   +       M=1     O=0     R=8     E
                   M=1     O=0     N       E       Y

• If E = 6, then N = 7 which is not possible as D = 7. So we must have E = 5 and
  N = 6. This means D + E = 7 + 5 = 12, and thus Y = 2.
                    C4=1    C3=0    C2=1    C1=1
                            S=9     E=5     N=6     D=7
                    +       M=1     O=0     R=8     E=5
                    M=1     O=0     N=6     E=5     Y=2

• So we have solved for all the letters!
• SEND + MORE = 9567 + 1085 = 10652.


## Slide 14

Solve the following puzzle by assigning numerical (0-9) in such a way that each
letter is assigned unique digit which satisfy the following addition.
ONE+ONE+TWO=FOUR                                                -2073 Bhadra

Solution:
Set of variables X = { O, N, E, T, W, F, U, R }
Set of Domain D = { 0,1,2,3,4,5,6,7,8,9}
Set of Constraints C
i. First letter must not be Zero. i.e. T, F, O must not be 0.
ii. Each variable should be assigned uniquely.
               c3        c2            c1
                         O             N      E
                         O             N      E
                         T             W      O
               F         O             U      R
     iii. E + E + O = 10 *c1 + R
     iv. 2N + W + c1= 10 * c2 + U
     v. c2 + O + O + T = 10 * c3 + O
     vi. c3 = F


## Slide 15

         c3         c2       c1
                    O        N         E
                    O        N         E
                    T        W         O
         F          O        U         R
F can’t be 0 and is equal to c3 so it is either 1 or 2.
As O can’t be 0 and if we assume O as 1 it will result c3 as 1 which contradicts constraints (ii). So let
us take O as 2 which will result c3 = F = 1
             c3=1    c2       c1
                     O =2     N         E
                     O =2     N         E
                     T        W         O =2
             F =1    O =2     U         R

From constraint (v), c2 + T must be 8. so combinations of (0,8), (1,7),(2,6) , (3,5) are possible.
Let’s take 0 as c2 and T as 8 then,


## Slide 16

         c3=1   c2=0    c1
                O =2    N      E
                O =2    N      E
                T=8     W      O =2
         F =1   O =2    U      R
Now, N can have only 0,3,4 other value results c2 greater than 0
Let’s take N = 0, then c1 must be 1 or 2.
If c1 = 1 then,
W and U are consecutive numbers and the pair can be (3,4), (4,5),(6,7)
Let’s take (3,4) then
          c3=1 c2=0 c1=1
                  O =2 N=0 E
                  O =2 N=0 E
                  T=8   W=3 O =2
          F =1 O =2 U=4 R


## Slide 17

Now, E can’t have 0,1,2,3,4,8
If we take E as 5 then R = 2 which is already taken by O.
If we take E as 6 then R = 4 which is already taken by U.
If we take E as 7 then R = 6 which doesn’t violates with any variables.
Hence, the solution is


               c3 = 1 c2 = 0 c1 = 1
                      O=2 N=0 E=7
                      O=2 N=0 E=7
                      T=8 W=3 O=2
               F = 1 O =2 U = 4 R = 6


## Slide 18

                                                     T          E   N
                                                     T          E   N
                                +F         O         R          T   Y
                                S          I         X          T   Y

Set of variables X = { T, E, N, F, O, R, Y, S, I, X }
Set of Domain D = { 0,1,2,3,4,5,6,7,8,9}
Set of Constraints C
i. First letter must not be Zero. i.e. T, F, S must not be 0.
ii. Each variable should be assigned uniquely.



                 c4        c3         c2        c1
                                                                        iii. c4 + F = S
                                      T         E          N            iv. c3 + O = 10 * c4 + I
                                      T         E          N            v. c2 + T + T + R = 10 * c3 + X
                                                                        vi. c1 + E + E + T = 10 * c2 + T
                 +F        O          R         T          Y
                                                                        vii. N + N + Y = 10 * c1 + Y
                 S         I          X         T          Y


## Slide 19

                                                     T          E   N
                                                     T          E   N
                                +F         O         R          T   Y
                                S          I         X          T   Y

Set of variables X = { T, E, N, F, O, R, Y, S, I, X }
Set of Domain D = { 0,1,2,3,4,5,6,7,8,9}
Set of Constraints C
i. First letter must not be Zero. i.e. T, F, S must not be 0.
ii. Each variable should be assigned uniquely.



                 c4        c3         c2        c1
                                                                        iii. c4 + F = S
                                      T         E          N            iv. c3 + O = 10 * c4 + I
                                      T         E          N            v. c2 + T + T + R = 10 * c3 + X
                                                                        vi. c1 + E + E + T = 10 * c2 + T
                 +F        O          R         T          Y
                                                                        vii. N + N + Y = 10 * c1 + Y
                 S         I          X         T          Y


## Slide 20

                   c4       c3       c2       c1
                                     T        E        N
                                     T        E        N
                   +F       O        R        T        Y
                   S        I        X        T        Y
As F and S can’t be same and 0. c4 must be 1 since c3 + O can’t give carry over greater than 1 and
also F, S must be consecutive numbers.
c3 can’t be 0 as it will result O and I same. So c3 can be either 1 or 2.

                                                C4=1 c3            c2       c1
                                                                   T        E        N
                                                                   T        E        N
                                                +F         O       R        T        Y
                                                S          I       X        T        Y
In 1st column 2N + Y = 10 * c1 + Y and in 2nd column c1 + 2E + T = 10* c2 + T, only two digit can give
such numbers which can result same number even after adding by 2 time * certain variable i.e. 0, 5.
1st column must not result carryover i.e c1 =0
So N must be 0 and E must be 5.
Which will result c1 = 0, c2 = 1


## Slide 21

                          C4=1 c3=     c2=1   c1=0
                                       T      E=5    N=0
                                       T      E=5    N=0
                          +F    O      R      T      Y
                          S     I      X      T      Y
• As c3 + O must give carry over O must be a big number i.e 8 or 9.
• If O= 8 gives I = 0 so O must be O = 9, then c3 must be 2, otherwise c3
  + 9(value of O) = 10 and 0 is already taken for N.
• This will result value of I = 1
                     C4=1 c3=2       c2=1   c1=0
                                     T      E=5    N=0
                                     T      E=5    N=0
                     +F        O=9   R      T      Y
                     S         I=1   X      T      Y


## Slide 22

                     C4=1 c3=2     c2=1    c1=0
                                   T       E=5     N=0
                                   T       E=5     N=0
                     +F     O=9    R       T       Y
                     S      I=1    X       T       Y
• To get carry over 2 in 4th column, T can be 7,8 . Let us take T as higher
  value i.e. 8 then 1 + 8 + 8 + R = 10 * 2 + X
• R must be greater than 3 as it will result 17 + R < 20. so R can be
  either 4,6,7. let us take R = 7 then X=4
                    C4=1 c3=2     c2=1    c1=0
                                  T=8     E=5     N=0
                                  T=8     E=5     N=0
                    +F     O=9    R=7     T=8     Y
                    S      I=1    X=4     T=8     Y


## Slide 23

• Only 2,3,6 are already taken for other variable now F should be 2 to
  give S as 3 and Y=6



                   C4=1 c3=2    c2=1   c1=0
                                T=8    E=5    N=0
                                T=8    E=5    N=0
                   +F=2   O=9   R=7    T=8    Y=6
                   S=3    I=1   X=4    T=8    Y=6


## Slide 24

Production System
• Production System - A production system consists of a set of rules,
  each consisting of a left hand side ( pattern) that determines the
  applicability of rules and a right side that describes the operation to
  be performed if the rule is applied.


## Slide 25

Water Jug Problem
You are given two unlabeled empty water jugs X, Y that can hold 4 ltrs
and 3 ltrs of water respectively. Now fill the water jug X with exactly 2
ltrs keeping jug Y empty from the water pool.


                                       Y    3 ltrs


                                                           Water pool
                                       X    4 ltrs


## Slide 26

Production rules
State   Current State (left) and     Next State (Right)   definition
        condition
1       (x , y) & x < 4              (4 , y)              Fill jug x
2       (x , y) & y < 3              (x , 3)              Fill jug y
3       (x, y) & 0 < x <= 4          (0, y)               Empty jug x
4       (x, y) & 0 < y <= 3          (x, 0)               Empty jug y
5       (x, y) & x + y > = 4         (4, y-(4-x)          Fill jug x from jug y
6       (x, y) & x + y >=3 & x > 0   (x- (3-y), 3)        Fill jug y from jug x
7       (x, y) & x +y <= 4           (x + y, 0)           Add water from jug y to jug x
8       (x, y) & x + y <= 3          (0, x + y)           Add water from jug x to jug y


## Slide 27

                                                       0
                                                                           0                                Water pool
                                                       Y
                                                                           X

    (x,y)  (x + 0, y + 0)           (x,y)  (x +0, y + 3)                                                           (x,y)  (x + 4, y + 3)
                                                                               (x,y)  (x + 4, y + 0)

      0                                3                                            0                                3
                  0                                    0                                            4                              4
Y                       X        Y                             X           Y                                    Y                          X
                                                                                                        X



                             0                                 0                                    3
                                           3    X      Y               0            X       Y               4    X
                        Y



                             3
                        Y                  3   X


                                                           2                                    2                          0
                                                   Y               4            X       Y                   0   X    Y                 2       X


## Slide 28

• Initial state (x,y) = (0,0)
• Goal state (x,y) = (2, 0)
• Successor function when (x,y) = (0, 0)
• {(x + 0, y + 0) (0, 0), (x + 0 ,y + 3) (0, 3),(x + 4, y + 0) (4, 0), (x + 4, y +
  3) (4, 3)}
• Successor function when (x,y) = (0, 3)
{(x + 0, y - 3) (0, 0), (x + 4 ,y) (4, 3), (x + 3, y - 3) (3, 0)}
• Successor function when (x,y) = (3, 0)
{(x -3, y) (0, 0), (x - 3 ,y + 3) (0, 3), (x , y + 3) (3, 3)}
• Successor function when (x,y) = (3, 3)
{(x - 3, y - 3) (0, 0), (x + 1 ,y) (4, 3), (x +1 , y - 1) (4, 2)}
• Successor function when (x,y) = (4, 2)
{(x - 4, y - 2) (0, 0), (x ,y + 1) (4, 3), (x -4 , y) (0, 2)}
• Successor function when (x,y) = (0, 2)
{(x - 0, y - 2) (0, 0), (x + 4 ,y ) (4, 2), (x + 2 , y - 2) (2, 0)}


## Slide 29

Production System
• Eg. Vacuum robot
• Pattern        => Action (Operation)
• [A, clean]     => move right
• [A, dirt]      => clean
• A production system may have one or more knowledgebase that contain whatever
  information is appropriate for the particular task.
• A control strategy that specifies the order in which the rules will be selected and a way of
  resolving the conflicts that arise when several rules matched at once i.e. it must have a
  Rule Applier for conflict resolution.
• The first requirement of a good control strategy is that it must cause motion.
• The second requirement of a good control strategy is that it should have systematic.
• - Eg. 8-Puzzle game


## Slide 30

Problem Classification
i.   Ignorable: Intermediate actions can be ignored. Eg. Water-jug
     problem.
ii. Recoverable: The actions can be implemented to go the initial
     state. Eg. 8-puzzle game.
iii. Irrecoverable: The actions cannot help to reach the precious state.
     Eg. Tic-tac-toe.
iv. Decomposable: The problem can be broken into similar ones. Eg.
     Word puzzle game.


## Slide 31

     N Queens Problem
     Q1                       Q2             Q1                                 Q1

               Q3   Q4                                                Q2                  Q2

Q4                                 Q3                 Q3                                            Q3

          Q2             Q1             Q4                                 Q4

                                                                Q5                   Q5
                                                                                               Q6
          Q1             Q2

Q3                                 Q3   Q1   X    X        X     X

               Q4   Q4                  X    X    Q2       X     X

     Q2                       Q1        X    X    X        X     Q3

                                        X    Q4   X        X     X

                                        X    X    X        Q5    X


## Slide 32

    8 puzzle game
    Solve the given 8 puzzle game as shown in the figure.

        5       1          2                     1       2      3
3




                                        3
                6          3                     4       5      6
2




                                        2
        4       7          8                     7       8
1




                                        1
    A           B              C             A            B        C
        Initial Position                             Goal Position


## Slide 33

3                                  S.N   Left                Right         definition
                                   1     Blank Space (1,A)   (1,A)(1,B)   Move Right
                                                             (1,A)(2,A)   Move Up
2


                                   2     Blank Space (1,B)   (1,B)(1,A)   Move left
                                                             (1,B)(2,B)   Move Up
1




                                                             (1,B)(1,C)   Move Right
                                   3     Blank Space (1,C)   (1,C)(1,B)   Move Left
    A   B                      C                             (1,C)(2,C)   Move Up
                                   4     Blank Space (2,A)   (2,A)(2,B)   Move Left
            Production rules
                                                             (2,A)(1,A)   Move Down
                                                             (2,A)(3,A)   Move Up
                                   5     Blank Space (2,B)   (2,B)(1,B)   Move Down
                                                             (2,B)(3,B)   Move Up
                                                             (2,B)(2,A)   Move Left
                                                             (2,B)(2,C)   Move Right

                                   6     Blank Space (2,C)   (2,C)(1,C)   Move Down
                                                             (2,C)(3,C)   Move Up
                                                             (2,C)(2,B)   Move Left
                                   7     Blank Space (3,A)   (3,A)(3,B)   Move Right
                                                             (3,A)(2,A)   Move Down
                                   8     Blank Space (3,B)   (3,B)(3,A)   Move Left
                                                             (3,B)(3,C)   Move Right
                                                             (3,B)(2,B)   Move Down

                                   9     Blank Space (3,C)   (3,C)(3,B)   Move Left
                                                             (3,C)(2,C)   Move Down


## Slide 34

                                    5           1       2




                            3
                                                6       3




                            2
                                    4           7       8




                            1
                                A               B           C
                                                                                                1   2




                                                                            3
    5   1   2
3




                                        5           1   2




                            3
                                                                                        5       6   3




                                                                            2
    6       3
2




                                        4           6   3




                            2
                                                                                        4       7   8




                                                                            1
    4   7   8
1




                                                    7   8

                            1
    A   B   C                                                                       A           B       C
                                    A           B       C

                        5       1           2                       5   1   2                   1           2




                                                                                        3
                3




                                                            3
                        4       6           3                           6   3                   5   6       3




                                                                                        2
                2




                                                            2
                        7                   8                       4   7   8                   4   7       8




                                                                                        1
                1




                                                            1
                    A           B               C               A       B       C           A       B           C


## Slide 35

        1   2
3
2       5   6   3

        4   7   8
1




    A       B       C           1   2   3               1       2        3




                        3




                                                3
                                4   5   6               4       5        6




                        2




                                                2
        1   2   3
3




                                    7   8               7                8




                        1




                                                1
        5   6
2




                                                    A               B    C
                            A       B       C
        4   7   8
1




    A       B       C                               A            B           C
                                                     1          2        3




                                                3
                                                        4       5        6




                                                2
        1   2   3               1   2   3
                        3
3




        5       6                   5   6               7       8
                        2




                                                1
2




        4   7   8               4   7   8           A           B            C
                        1
1




    A       B       C       A       B       C               Goal State


## Slide 36

Graph Coloring Problem
Problem Statement
Graph coloring problem involves assigning colors to certain elements of
a graph subject to certain restrictions and constraints. In other words,
the process of assigning colors to the vertices such that no two
adjacent vertexes have the same color is caller Graph Colouring.
This is also known as vertex coloring.
                      Chromatic Number: The smallest number of
                      colours needed to colour a graph G is called its
                      chromatic number.
                      For example, in the image, vertices can be
                      coloured using a minimum of 2 colours.
                      Hence the chromatic number of the graph is 2.


## Slide 37

1   2
        Solve the given Graph Coloring Problem
4   3                                                               1
                                                                R           B
                                                                        G

                                                2                   2           2
                                R                       B
                                            G


                            3                               3
                                                3
                                R                   B
                                        G



                        4           4               4
                R           B
                    G


## Slide 38

Thank you


## Slide 39

Assignments
1)     Write short notes about 2 AI system.
2)     There is a goat, a tiger, a man and a bundle of grass on one side of a river. There's a boat which can only carry two at a time and
       can only be rowed manually by the man. How can they cross the river? Use production rule to solve the problem.
3)     Solve the following CSP problems.
i. S E N D + M O R E = M O N E Y
ii. R I G H T + R I G H T = W R O N G
iii. W R O N G + W R O N G = R I G H T
iv. L O G I C + L O G I C = P R O L O G
v. C R O S S + R O A D S = D A N G E R
vi. B A S E + B A L L = G A M E S
vii. O N E + O N E = T W O
viii. O N E + O N E + T W O = F O U R
ix. K Y O T O + O S A K A = T O K Y O
x. A P P L E + G R A P E = C H E R R Y
xi. T E N + T E N + FORTY = S I X T Y


## Slide 40

3)    Given two unmarked jugs, one which holds 7 liters, and another
which holds 11 liters, an unlimited supply of water, and no need
to conserve, how do you measure exactly 6 liters?
4)    Solve the given 8 puzzle game

             1      2        3
     3




                                                2       8        1




                                        3
             8               4
     2




                                                        4        3




                                        2
             7      6        5
     1




                                                7       6        5




                                        1
         A          B            C          A           B            C
             Initial state                          Goal state


## Slide 41

5) Solve the 8 queen problem in chess world. Place the Queen such
that no queen can attack each other.

6) Solve the tower of Hanoi problem with 4 tiles or disk (w, x, y, z) and 3
poles namely A,B,C from pole A to pole C.


                   Z
                   Y
                   X
                  W



                  A                  B                    C


## Slide 42

     Q1                       Q2             Q1                                 Q1

               Q3   Q4                                                Q5                  Q2

Q4                                 Q3                 Q2                                            Q3

          Q2             Q1             Q4                                 Q4

                                                                Q3                   Q5
                                                                                               Q6
          Q1             Q2

Q3                                 Q3   Q1   X    X        X     X

               Q4   Q4                  X    X    Q2       X     X

     Q2                       Q1        X    X    X        X     Q3

                                        X    Q4   X        X     X

                                        X    X    X        Q5    X


## Slide 43

THANK YOU
