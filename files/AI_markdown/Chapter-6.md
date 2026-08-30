# Chapter 6: Machine Learning


## Slide 1

   Chapter 6
Machine Learning
   Lecturer: Sujan Shrestha


## Slide 2

Introduction to ML
• Learning is the ability of an agent to improve its behavior based on experience. This could mean the
following:
   The range of behaviors is expanded; the agent can do more.
   The accuracy on tasks is improved; the agent can do things better.
   The speed is improved; the agent can do things faster.


## Slide 3

• With the help of sample historical data, which is known as training data, machine learning algorithms build
  a mathematical model that helps in making predictions or decisions without being explicitly programmed.
• Machine learning brings computer science and statistics together for creating predictive models. Machine
  learning constructs or uses the algorithms that learn from historical data. Normally, The more we will provide
  the information, the higher will be the performance.


## Slide 4

How does Machine Learning work
• A Machine Learning system learns from historical data, builds the prediction models, and whenever it
receives new data, predicts the output for it.
• The accuracy of predicted output depends upon the amount of data, as the huge amount of data helps to build
a better model which predicts the output more accurately.
• Suppose we have a complex problem, where we need to perform some predictions, so instead of writing a
code for it, we just need to feed the data to generic algorithms, and with the help of these algorithms, machine
builds the logic as per the data and predict the output.
                            working of Machine Learning algorithm:


## Slide 5

Features of Machine Learning
   Machine learning uses data to detect various patterns in a given dataset.
   It can learn from past data and improve automatically.
   It is a data-driven technology.
   Machine learning is much similar to data mining as it also deals with the huge amount of the data


## Slide 6

    MACHINE LEARNING
Machine Learning is the most widely used branch of computer science nowadays.
It is used by many industries for automating tasks and doing complex data analysis.
We already are using devices that utilize them.
For Example, an intelligent assistant like Google Home, wearable fitness trackers like Fitbit.
There are a bunch of examples around us with ML in use.

   Prediction — Machine learning can also be used in the prediction systems. Considering the
    loan example, to compute the probability of a fault, the system will need to classify the
    available data in groups.
   Image recognition — Machine learning can be used for face detection in an image as well.
    There is a separate category for each person in a database of several people.
   Speech Recognition — It is the translation of spoken words into the text. It is used in voice
    searches and more. Voice user interfaces include voice dialing, call routing, and appliance
    control. It can also be used as simple data entry and the preparation of structured documents.
   Medical diagnoses — ML is trained to recognize cancerous tissues.


## Slide 7

Classification of machine learning
• Machine Learning is classified into 3 types of algorithms -
1. Supervised Learning
2. Unsupervised Learning
3. Reinforcement Learning


## Slide 8

Supervised Learning
 • In supervised learning, the algorithm is provided with a finite set of data which
   contains the right answers for each of the input values. The machine has the
   task to predict the right answers by analyzing the dataset correctly.




  we have initially taken some data and marked them as ‘Tom’ or ‘Jerry’. This
  labeled data is used by the training supervised model, this data is used to train
  the model.
  Once it is trained we can test our model by testing it with some test new mails
  and checking of the model can predict the right output.


## Slide 9

Types of Supervised Learning
   Regression: It is a type of problem where the output variable is a real value, such
    as “dollars” or “weight”.
   Classification: It is a type of problem where the output variable is a category,
    such as “red” or “blue” or “disease” and “no disease”.


## Slide 10

Unsupervised Learning
• In unsupervised learning, the algorithm is provided with an unlabeled
  dataset and it predicts a pattern in the data.




we have given some characters to our model which are ‘Ducks’ and ‘Not
Ducks’. In our training data, we don’t provide any label to the corresponding
data. The unsupervised model can separate both the characters by looking at the
type of data and models the underlying structure or distribution in the data to
learn more about it.


## Slide 11

Types of Unsupervised Learning
• Clustering: A clustering problem is where we group similar data according
  to a pattern in data, such as grouping customers by purchasing behavior.
• Association: An association rule learning problem is where we want to
  discover rules that describe large portions of your data, such as people
  that buy X also tend to buy Y.


## Slide 12

Reinforcement                      learning
• The algorithm learns by interacting with the environment. The algorithm
 adjusts itself based on feedback.




The agent is given 2 options i.e. a path with water or a path with fire.
A reinforcement algorithm works on reward a system i.e. if the agent uses the
fire path then the rewards are subtracted and the agent tries to learn that it
should avoid the fire path.
If it had chosen the water path or the safe path then some points would have
been added to the reward points, the agent then would try to learn what path is
safe and what path isn’t.


## Slide 13

AI Learning Models: Knowledge-Based Classification
• Considering representation of knowledge, AI learning models can be classified in two main types: inductive and
deductive.
1.       Inductive Learning
This type of AI learning model is based on inferring a general rule from datasets of input-output pairs. Algorithms such
as knowledge based inductive learning (KBIL) are a great example of this type of AI learning technique. KBIL
focused on finding inductive hypotheses on a dataset with the help of background information.
• Concluding from Specific to General is inductive learning. Testing certain sample and deciding the whole thing
from the result of sample. Eg.
Statement 1. Mango is a fruit.(Specific statement ).            Statement 2: The box is full of fruits. (Specific
statement).
Conclusion: The box is full of Mangoes. (General Conclusion).
2.       Deductive Learning
• This type of AI learning technique starts with the series of rules and infers new rules that are more efficient in the
context of a specific AI algorithm. Explanation-based learning (EBL) and relevance-based Learning (RBL) are
examples of deductive techniques. EBL extracts general rules from examples by generalizing” the explanation.
Concluding from General to Specific is Deductive learning.
Statement 1: All mangoes are fruits. (General Statement)        Statement 2: All fruits have seeds. (General Statement).
Conclusion: Mangoes have seeds. (Specific statement).


## Slide 14

          Machine Learning Framework




1.         Environment

The environment refers the nature and quality of information given to the learning element. The nature of information depends on its level (the
degree of generality with respect to the performance element). High level information is abstract, it deals with a broad class of problems. Low
level information is detailed, it deals with a single problem, the quality of information involves noise free, reliable and ordered.

2.         Learning Elements

Learning elements is the component that deals with the how the system should be trained so that this element can predict the output for new data.
Learning elements are of four types on the basis of learning situations:

i) Rote learning: In this situation environment provides information at the required level

ii) Learning by being told: Here, information is too abstract, the learning element must hypothesize missing data.

iii) Learning by example: In this situation, information is too specific, the learning element must hypothesize more general rules.

iv) Learning by analogy: Information provided is relevant only to an analogous task, the learning element must discover the analogy.


## Slide 15

3.       Knowledge Base
Knowledge base is the main component in framework as it stores the rules that help to maintain the database required
for making learning element. Knowledge acquired from the expert are maintained here. Knowledge base should have
following features:
i) Expressive: The representation of knowledge in knowledge base contains the relevant knowledge in an easy
fashion.
ii) Modifiable: The knowledge base must be easy to change the data in the knowledge base.
iii) Extendibility: The knowledge base must contain meta-knowledge (knowledge on how the data base is structured)
so the system can change its structure.


4.       Performance Element
Performance element is the component that deals with the evaluation of the algorithm designed. It helps to feedback
the error occurred and gives the accuracy data to the learning component. It has following key features:
i) Complexity: For learning, the simplest task is classification based on a single rule while the most complex task
requires the application of multiple rules in sequence
ii) Feedback: The performance element must send information to the learning system to be used to evaluate the
overall performance
iii) Transparency: the learning element should have access to all the internal actions of the performance element.


## Slide 16

Genetic Algorithm
• A genetic algorithm is a heuristic search method used in artificial intelligence. It is used for finding optimized
solutions to search problems based on the theory of natural selection and evolutionary biology.
• A genetic algorithm makes uses of techniques inspired from evolutionary biology such as selection, mutation,
inheritance and recombination to solve a problem. The most commonly employed method in genetic algorithms
is to create a group of individuals randomly from a given population.
• Criteria for efficient search algorithm for complex problems:
 randomly generate a population of potential solutions
 calculate fitness of each potential solution
 allow best individuals to breed and crossover (p < .6)
 allow low probability mutations (p < .007) to maintain diversity


## Slide 17

Genetic Algorithm Components or Operators
             Initialization

              Selection


             Cross-over


              Mutation


             Termination


## Slide 18

• Initialization
• The population size depends on the nature of the problem, but
typically contains several hundreds or thousands of possible solutions.
• Often, the initial population is generated randomly, allowing the entire
range of possible solutions in the search space.
• Selection
• During each successive generation, a portion of the existing population
is selected to breed a new generation. Individual solutions are selected
through a fitness-based process. Certain selection methods rate the
fitness of each solution and preferentially select the best solutions.
• The fitness function is defined over the genetic representation and
measures the quality of the represented solution. The fitness function is
always problem dependent.


## Slide 19

• Crossover and Mutation
• The next step is to generate a second generation population of solutions from those
selected through a combination of genetic operators: crossover (also called
recombination), and mutation.
• For each new solution to be produced, a pair of "parent" solutions is selected for
breeding from the pool selected previously. By producing a "child" solution using the
above methods of crossover and mutation, a new solution is created which typically shares
many of the characteristics of its "parents". New parents are selected for each new child,
and the process continues until a new population of solutions of appropriate size is
generated. Although reproduction methods that are based on the use of two parents are
more "biology inspired" i.e., generate higher quality chromosomes. It is done at random
position and offspring produced have 30-70% of its parent’s character. We randomly select
a crossover point.
• These processes ultimately result in the next generation population of chromosomes that
is different from the initial generation. Generally, the average fitness will have increased
by this procedure for the population, since only the best organisms from the first
generation are selected for breeding, along with a small proportion of less fit solutions.
These, less fit solutions ensure genetic diversity within the genetic pool of the parents and
therefore ensure the genetic diversity of the subsequent generation of children by
mutation. In mutation we flip the value of the gene randomly. It is said that only 1% of
data is mutated at single iteration. Mutation help to achieve the diversity in the solution.


## Slide 20

Termination
This generational process is repeated until a termination condition has been
reached. Common terminating conditions are:
• A solution is found that satisfies minimum criteria
• Fixed number of generations reached
• Allocated budget (computation time/money) reached
• The highest ranked solution fitness is reaching or has reached a plateau such
  that successive iterations no longer produce better results
• Manual inspection
• Combinations of the above


## Slide 21

For instance, in the knapsack problem, one wants to maximize the total
value of objects that can be put in a knapsack of some fixed capacity. A
representation of a solution might be an array of bits, where each bit
represents a different object, and the value of the bit (0 or 1) represents
whether or not the object is in the knapsack. Not every such
representation is valid, as the size of objects may exceed the capacity of
the knapsack. The fitness of the solution is the sum of values of all
objects in the knapsack if the representation is valid, or 0 otherwise.


## Slide 22

There are 4 items, each item is associated with some weight (w) and value of item (v)
There is a knapsack (k) with limited capacity that can hold atmost 12 kg.
Problem statement:
The problem is that which item should be kept in the knapsack so that it will maximize knapsack
value without breaking knapsack.

     Items              Weight              Value
        A                5 kg                $ 12
        B                3 kg                 $5
        C                7 kg                $ 10
       D                 2 kg                 $7
 Step 1: Chromosome Encoding
 Chromosome:              A                  B                 C                D

                                                                       C1   0       1   1   0
Gene 0  represent absence of item in the knapsack.
Gene 1  represent presence of item in the knapsack.                   C2   0       1   0   1
4 bits are requested to represent chromosome so there can be 2n =16.   C3   1       1   0   1
Initial population is selected (chromosome) or created randomly.       C4   1       1   1   1


## Slide 23

    Step 2: Knapsack capacity = 12,
    Applying fitness function:
    For C1:
    Value of the knapsack = 5 + 10 = 15
    Weight of the knapsack = 3 + 7 = 10 kg
    So, 12 > 10 so C1 is accepted
    For C2:
    v = 5 + 7 = 12
    w = 3 + 2 = 5 kg
    C2 accepted
    For C3:
    v = 12 + 5 + 7 = 24
    w = 5 + 2 + 3 = 10 kg
    C3 accepted
    For C4:
    v = 12 + 5 + 10 + 7 = 34
    w = 5 + 3 + 7 + 2 = 17
    C4 not accepted
Selection:
It is done by roulette wheel selection. Spin the roulette wheel and wherever the wheel stops, the individual get secreted
at that point. The individual that has the highest fitness values get large sheer of the wheel total fitness value = 15 + 12
+ 24 = 51


## Slide 24

C3 occupies almost half of the wheel, 24/51 C4 has 0 chance of winning & C3 has height chances of getting
selected.
Crossover:
The crossover operation takes the selected chromosomes for mating and mixes the genetic material to produce
offspring.
One-point crossover

 c3      1 1 0 1
 c2      0 1 0 1
0s1      1 1 0 1
0s2      0 1 0 1 offspring }
Mutation is done for 1 % of the gene so it is not mandatory to change the at each iteration. It introduces the
diversely within the population so that search algorithm doesn’t stuck at local maxima.

   C1:        0           1          1          0        Before
                                                        mutation
                                     

  C1:        0           1          0          0        after
                                                        mutation


## Slide 25

Replace the chromosome that has lower fitness score with better chromosome or offspring.


Selection elevation criteria:
   OS 1 = 1101 value = 12 + 5 +7 =24, weight = 5 + 3+2
                                                                                     Generation 2
   OS 2 = 0101 value = 5 + 7 = 12, weight = 3 + 2
   C3 = 1101 value = 24 , weight = 10
   C2 = 0101 value = 5 + 7 = 12, weight = 3 + 2                                 c1                  0s1
                                                                                c2                  0s2
   C1 = 0100 value = 5, weight = 3                                              c3                  c3
                                                                                c4                  c2
Thus, new generation is produced again and again. This provide the solution
over the range and we can select the best solution after certain generation.



                  25          24               24
  maximum value




                  20
                  15
                  10
                  5

                          1                2
                              Generation


## Slide 26

 Fuzzy logic
• The term fuzzy mean things which are not very clear or vague. In real life, we may come across a situation
where we can't decide whether the statement is true or false.
• Fuzzy logic offers very valuable flexibility for reasoning. We can also consider the uncertainties of any
situation.
• Fuzzy logic algorithm helps to solve a problem after considering all available data. Then it takes the best
  possible decision for the given the input. The FL method imitates the way of decision making in a human
  which consider all the possibilities between digital values T and F.


## Slide 27

        Architecture of a Fuzzy Logic                            In the architecture of the Fuzzy Logic system,
                                                                  each component plays an important role. The
                  System                                          architecture consists of four different
                                                                  components.
                                                                   1. Rule Base
                                                                   2. Fuzzification
                         Rule base                                 3. Inference Engine
Crisp                                                              4. Defuzzification
Input
         Fuzzification               Defuzzification
                                                       Crisp
                                                       Output
                         Inference
           Fuzzy Input     Engine     Fuzzy Output


## Slide 28

        Architecture of a Fuzzy Logic                           In the architecture of the Fuzzy Logic system,
                                                                 each component plays an important role. The
                  System                                         architecture consists of four different
                                                                 components.
                                                                  1. Rule Base
                                                                  2. Fuzzification
                         Rule base                                3. Inference Engine
Crisp                                                             4. Defuzzification
Input
         Fuzzification               Defuzzification
                                                       Crisp
                                                       Outpu
                         Inference                     t
           Fuzzy Input     Engine     Fuzzy Output


## Slide 29

        Architecture of a Fuzzy Logic                          1. Rule Base :
                                                                   Rule Base is a component used for storing
                  System                                             the set of rules and the If-Then conditions
                                                                     given by the experts are used for controlling
                                                                     the decision-making systems.
                                                                   There are so many functions which offer
                         Rule base                                   effective methods for designing and tuning
Crisp                                                                of fuzzy controllers.
Input                                                              These updates or developments decreases
         Fuzzification               Defuzzification                 the number of fuzzy set of rules.
                                                       Crisp
                                                       Outpu
                         Inference                     t
           Fuzzy Input     Engine     Fuzzy Output


## Slide 30

        Architecture of a Fuzzy Logic                         2. Fuzzification :
                                                                  Fuzzification is a module or component for
                  System                                             transforming the system inputs, i.e., it
                                                                     converts the crisp number into fuzzy steps.
                                                                  The crisp numbers are those inputs which
                                                                     are measured by the sensors and then
                         Rule base                                   fuzzification passed them into the control
Crisp                                                                systems for further processing.
Input                                                             This component divides the input signals
         Fuzzification               Defuzzification                 into following five states in any Fuzzy Logic
                                                       Crisp
                                                       Output        system:
                         Inference                                   i. Large Positive (LP)
           Fuzzy Input     Engine     Fuzzy Output                   ii. Medium Positive (MP)
                                                                     iii. Small (S)
                                                                     iv. Medium Negative (MN)
                                                                     v. Large negative (LN)


## Slide 31

        Architecture of a Fuzzy Logic                         3. Inference Engine :
                                                                  This component is a main component in any
                  System                                            Fuzzy Logic system (FLS), because all the
                                                                    information is processed in the Inference
                                                                    Engine.
                                                                  It allows users to find the matching degree
                         Rule base                                  between the current fuzzy input and the
Crisp                                                               rules.
Input                                                             After the matching degree, this system
         Fuzzification               Defuzzification                determines which rule is to be added
                                                       Crisp
                                                       Output       according to the given input field. When all
                         Inference                                  rules are fired, then they are combined for
           Fuzzy Input     Engine     Fuzzy Output                  developing the control actions.


## Slide 32

        Architecture of a Fuzzy Logic                         4. Defuzzification
                                                                  Defuzzification is a module or component,
                  System                                           which takes the fuzzy set inputs generated
                                                                   by the Inference Engine, and then
                                                                   transforms them into a crisp value.
                                                                  It is the last step in the process of a fuzzy
                         Rule base                                 logic system.
Crisp                                                             The crisp outputvalue is a type of value
Input                                                              which is acceptable by the user.
         Fuzzification               Defuzzification              Various techniques are present to do this,
                                                       Crisp
                                                       Output      but the user has to select the best one for
                         Inference                                 reducing the errors.
           Fuzzy Input     Engine      Fuzzy Output


## Slide 33

Fuzzy Logic Architecture
• Fuzzy logic architecture has 4 main parts as shown in the diagram:
• Step 1: Fuzzification:
• Fuzzification step helps to convert inputs. It allows you to convert, crisp numbers into fuzzy sets. Crisp inputs
measured by sensors and passed into the control system for further processing. Like room temperature, pressure etc.
The main task of this step is to collect words that are needed to be assigned the values like very, little, nearly like
words. For example,
• Ram car is moving very slow.
• Shyam car looks a bit faster.
• In above example, we see that very, looks a bit like terms that need to be addressed and hence in fuzzification, we
collect these words.
Step 2: Rule Base and Inference Engine:
• Rule Base contains all the rules and the if-then conditions offered by the experts to control the decision-making
system. The recent update in fuzzy theory provides various methods for the design and tuning of fuzzy controllers. This
updates significantly reduce the number of the fuzzy set of rules.
• Inference Engine helps you to determines the degree of match between fuzzy input and the rules. Based on the %
match, it determines which rules we need to implement according to the given input field. After this, the applied rules
are combined to develop the control actions. We define threshold to be taken what formula we need to write so that we
can get better degree of membership.


## Slide 34

   1




   0                                 speed
          7.5 9 10      12.5

Here 10 km/hr is threshold and below 7.5 km/hr we represent by 0, above 12.5 km/hr we indicate it by 1 and for the
values in between we need to define degree of membership. For the car moving at 10 km/hr we calculate as

                      (10 – 7.5)/ (12.5-7.5) = 0.5          so we can fuzzy value as (10, 0.5) .

For the car moving at 9 km/hr we calculate as = (9- 7.5)/(12.5-7.5) = 0.3
For this we write fuzzy value as (10, 0.3).

We see that in this step we define the threshold and gap should
be taken so that any value can be represented in fuzzy value.


## Slide 35

Step 3: Defuzzification:
• At last the defuzzification process is performed to convert the fuzzy sets into a crisp value. There are many
types of techniques available, so you need to select it which is best suited when it is used with an expert system.
It is the process of producing a quantifiable result in the fuzzy logic from fuzzy set and corresponding
membership degree. Defuzzification is the interpretation of the membership degree for collected vague values in
first step of fuzzification.
• Example: Very slow is indicated by (10, 0.1).

• A bit faster is indicated by (10, 0.9).


## Slide 36

          Fuzzy Operations
Fuzzy set is the set that has the member with the threshold value and degree of membership. Let us consider fuzzy sets for two cars is
given with threshold value of speed and degree of membership as
A = {(10, 0.2), (20, 0.3), (30, 0.4), (40, 0.5)}
B = {(10, 0.3), (20, 0.4), (30, 0.1), (40, 0.7)}
i) Union: Here, select the degree of membership with maximum values
A  B = {(10, 0.3), (20, 0.4), (30, 0.4), (40, 0.7)}
ii) Intersection: In intersection, select the degree of membership with minimum values
A  B = {(10, 0.2), (20, 0.3), (30, 0.1), (40, 0.5)}
iii) Complement: Simply subtract the degree of membership from 1.
A = {(10, 0.8), (20, 0.7), (30, 0.6), (40, 0.5)}
iv) X-OR or bold union:
A  B = min {1, MA + MB}
A B = {(10, 0.5), (20, 0.7), (30, 0.5), (40, 1)}
v) Bold intersection:
A ⊙ B = max{0, MA + MB -1}
A ⊙ B = {(10, 0), (20, 0), (30, 0), (40,0.2)}
vi) A and B will be equal if all the members in both set are equal.


## Slide 37

Advantages and Disadvantages of Fuzzy Logic System
Advantages:
The structure of fuzzy logic system is easy and understandable.
Fuzzy logic is widely used for commercial and practical purposes.
It helps you to control machines and consumer products
It may not offer accurate reasoning, but the only acceptable reasoning
It helps you to deal with the uncertainty in engineering
Mostly robust as no precise inputs required
It can be programmed to in the situation when feedback sensor stops working.
It can easily be modified to improve or alter system performance.
Inexpensive sensors can be used which helps you to keep the overall system cost and complexity low.
It provides a most effective solution to complex issues.

Disadvantages:
Fuzzy logic is not always accurate, so the results are perceived based on assumption, so it may not be widely
accepted.
Fuzzy systems don't have the capability of machine learning as well as neural network type pattern recognition.
Validation and verification of a fuzzy knowledge-based system needs extensive testing with hardware.
Setting exact, fuzzy rules and, membership functions is a difficult task.


## Slide 38

Decision tree
• A decision tree is a tree where each node represents a
  feature(attribute), each link(branch) represents a decision(rule) and
  each leaf represents an outcome.


## Slide 39

Algorithm of iterative dichotomizer 3:


## Slide 40

Example:
  A survey of 10 companies has been done and they are analyzed on the basis of age, competition, type to
  determine if the company is making profit or not. Make decision tree diagram for the following dataset to
  evaluate the profit for new company.
         Age            Competition             Type            Profit
 Old                  Yes                  Software             Down
 Old                  No                   Software             Down
 Old                  No                   Hardware             Down
 Mid                  Yes                  Software             Down
 Mid                  Yes                  Hardware             Down
 Mid                  No                   Hardware             Up
 Mid                  No                   Software             Up
 New                  Yes                  Software             Up
 New                  No                   Hardware             Up
 New                  No                   Software             Up
  Step I: Calculating information gain of the data set provided:


## Slide 41

   Age    Competition     Type   Profit
Mid      Yes            Software Down
Mid      Yes            Hardware Down
Mid      No             Hardware Up
Mid      No             Software Up




                                          New no software
                                          Mid yes hardware


## Slide 42

Assignment of iterative dichotomizer 3:


## Slide 43

Thank you
