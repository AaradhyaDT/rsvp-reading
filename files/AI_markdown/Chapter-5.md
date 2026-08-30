# Chapter 5: Structured Knowledge Representation


## Slide 1

      Chapter 5
Structural Knowledge
   Representation
     (7-8 marks)
    Lecturer: Sujan Shrestha


## Slide 2

Structured Knowledge Representation
Knowledge representation is an area of AI whose fundamental goal is to represent knowledge in such a manner
that facilitates inference i.e., drawing conclusion for knowledge. It analyzes how to think formally, how to use
symbol to represent a domain of discourse along with function that allow inference about the objects.
Knowledge representation helps to address the problem like:
- How do we represent fact about the world?
- How do we reason about them?
- What representations are appropriate for dealing with the real world?
- How to express knowledge in computer understandable form so that reasoning agent can perform well?
Knowledge Types
a. Declarative knowledge: In this type, the statement, facts, notion, belief which can be either true or false are
represented in the form of logic. It is passive knowledge.
E.g., Ram likes all kinds of food
b. Heuristic knowledge: It is the knowledge or rule which is related to particular domain. These rules or tricks
are used to make judgement and simplify solution for problem. Heuristic knowledge helps to achieve certain
goal using some tricks; these are considered as heuristic knowledge.
E.g., For playing chess game; heuristic knowledge is to make opponent’s king in danger position.
c. Procedural knowledge (imperative knowledge): Knowledge exercised in the performance of some task and
processed by an intelligent agent. Here, the knowledge contains all the required step to achieve certain goals or
solve problem.
E.g., To arrange a numerical data set in ascending order, we require certain steps so all these steps in sequence is
procedural knowledge for this problem domain.


## Slide 3

Knowledge Model
A model is a world in which a sentence is true under a particular
interpretation. There can be several models at once that have the same
interpretation.
a. First Order Predicate Logic
This consists of objects, predicates on objects, connectives and quantifiers.
Logic is simple representation which helps to infer new fact from the existing
information. Predicates are the relations between objects or properties of the
objects. Connectives and quantifiers allow for universal sentences. Relation
between objects can be true or false.
E.g., Propositional Logic.
We had already discussed logic representation in detail in chapter 4. Here in
this chapter we focus much in structured knowledge representation.


## Slide 4

Semantic Nets

Semantic network is an alternative to predicate logic as a form of knowledge representation.
Semantic network is a declarative graphic representation that can be used to represent knowledge and support
automated systems for reasoning about the knowledge.
The structure of a semantic net is shown graphically in terms of nodes and the arcs connecting each other.
Nodes are sometimes referred to as objects, events, subjects while arcs represent the links or relations. The links
are used to express relationships.
Example: Ram is a boy.
       Ram loves Sita.
       Ram’s children luv and kush.
                                                     is a
                                       Ram                      boy

                                              Love
                                                                 luv


                                       Sita                     kush


## Slide 5

Another example, representing the following fact into semantic web is given as
1)Tom is a cat.
2)Tom caught a bird.
3)Tom is owned by John.
4)Tom is ginger in color.
5) Cats like cream.
6) The cat sat on the mat.
7) A cat is a mammal.
8) A bird is an animal.
9) All mammals are animals.
10) Mammals have fur.



        i) Tom is a cat         Tom    is a    cat

                                       catch
        ii) Tom caught a bird   Tom            bird


## Slide 6

• We can make individual diagram with ease. Representing all in a single picture we get the following diagram.


## Slide 7

•Another example which illustrate to represent the event is given below:
• Mohan struck Nita in the garden with a sharp knife last week.


## Slide 8

•Another example which illustrate to represent the event is given below:
• Mohan struck Nita in the garden with a sharp knife last week.

                                                     garden

                                                                           last week
                                          who                       to whom
                           Mohan                      strike                     Nita
                                                           with
                                                      knife
                                                               is
                                                                    sharp


## Slide 9

Advantages of semantic web
- This method is easy to visualize.
- It is efficient in space requirement.
- The objects are represented only once.
Disadvantages of semantic web
- It is unable to represent negation, quantification, disjunction etc.
- We cannot infer or deduct new information.


## Slide 10

Frames
Frame is a static data structure used to represent well understood situation in a group of slots and slot fillers.
A single frame is not much useful. Frame systems usually have collection of frames connected to each other.

Frame structure contains following information:

i) Frame identification name:
It is field written in top of the frame structure where name of the frame is placed.
E.g., a frame which stores knowledge about a car can have frame name as car.
ii) Relationship of this frame to the other frame:
It relates different frame to each other.
E.g., A superclass of a frame (car) is a frame (vehicle).
iii) Knowledge about an attribute of an object and its value:
Attribute are written in slot and the value of slot is written in slot filler.
E.g., a frame (car) can have an attribute as no. of wheels with value 4.
iv) Frame default information:
This are slots values that are taken to be true when no evidence to the contrary of frame has been formed.
E.g., ‘Ram’s car’ frame copies the slot and slot values of its parent frame ‘car’ like no of wheel, model name etc.


## Slide 11

Types of frame
1. Class frame: It is the main frame from which other frames can be inherited.
2. Subclass frame: It is frame inherited from Class frame.
3. Instance frame: This frame is button frame from which no other frame can be derived.
This frame may be derived from both sub class and class frame.

Type of relationship
1. Is–a relationship: It relates subclass frame with a class frame or an instance frame with a
subclass or class frame. In this case a subclass frame or instance frame inherits all slots
from a class frame and it can also include new slots.
2. Part of relationship: It relates the slot values with its constituent parts:

                              Ram's car                            Ram
                             Owner   Ram                       Age      22


## Slide 12

      3. Semantic relationship:
      It relates object with its attributes and frame structure can be represented in semantic network.
      Solution for the same example in frame can be shown in frame structure as shown below:

                                                                                           bird
               is a                           is a
Mammal                       Cat                          Tom                           type animal
has    Fur               like bird                   like bird
                         like cream                  like cream
                         type mammal                 type mammal
                                                     Owner John           part of
                                                                                          John
                                                     Color Ginger
                                                                                      Age 22
                                                                                      Color white


## Slide 13

Frame methods
 Methods in frame are also called demons. Which are attached to slots. Demons are automatically invoked when
a slot is accessed. Standard demons are:
   1. IF NEEDED: It is invoked when it is necessary to acquire a slot value.
   2. IF CHANGED: It is invoked when a value of slot is changed.
   3. IF ADDED: It is invoked when a value is added to a slot.
   4. IF REMOVED: It is invoked when value of slot is deleted.
Example below shows relations between relations between class, subclass, instance frame.


## Slide 14

         Class: Vehicle            Truck
    Reg. No.                 Class: Vehicle
    Producer              Reg. No.
    Model                 Producer
    Owner                 Model
                          Owner
                                                       Basket
                          Load
                                                     Dimensions 2*3*15
            Car           Part          Basket
                                                     Material   iron
     Class: Vehicle
Reg. No.                           Ram's Car

Producer                         Class: Car
Model                     Reg. No.         LA657

Owner                     Producer          BMW
                                                           Ram
Number of doors       4   Model             850
                          Owner             Ram         Age   22
Engine                                                  Color white
                          Number of doors      2
                          Engine               5.0


## Slide 15

Advantages:
  1. It makes programming easier by grouping relate knowledge together.
  2. Easy to setup new slots or new properties & relations.
  3. Easy to include default information & detect missing values(inheritance).



Disadvantages:
1.    Frame for a room will be completely different person.
2.    No associated inference mechanism.


## Slide 16

 Conceptual dependency & script
 • Conceptual dependency is theory in which we try to be independent of the words.
 • For any 2 or more sentences that are identical in meaning, there should be only one representation.
 • A script is a remembered precedent, consisting of tightly coupled, expectation-suggesting primitive-action and
 state change frames.
 • A script is a structured representation describing a stereotyped sequence of events in a particular context i.e.
 extend frames by explicitly representing expectations of actions and state changes.
 • Find primitives to describe the world like PTRANS for “transfer physical location of an object (= go)” and
 ATRANS for “transfer a relationship (= give)”.
 •E.g.,
                                                                        Someone
Ram took a book from someone.       Ram        take book
                                                ATRANS                 Ram
                                                                               I
     I give a book to Ram            I            g iv e       book
                                                                               Ram


## Slide 17

For any 2 (or more) sentences that are identical in meaning, there should be only one representation of that meaning.
Conceptual dependency provides:
- a structure into which nodes representing information can be placed
- a specific set of primitives
- at a given level of granularity.
- Sentences are represented as a series of diagrams depicting actions using both abstract and real physical situations.
- The agent and the objects are represented.
- The actions are built up from a set of primitive acts which can be modified by tense.


Examples of primitive acts are:
ATRANS - Transfer of an abstract relationship. e.g. give, take, lend, borrow.
PTRANS - Transfer of the physical location of an object. e.g. go, went.
PROPEL - Application of a physical force to an object. e.g. push, pull.
MTRANS - Transfer of mental information. e.g. tell.
MBUILD - Construct new information from old. e.g. decide, conclude.
SPEAK - Utter a sound. e.g. say, talk, play music.
ATTEND - Focus a sense on a stimulus. e.g. listen, watch.
MOVE - Movement of a body part by owner. e.g. punch, kick.
GRASP - Actor grasping an object. e.g. clutch, collect.
INGEST - Actor ingesting an object. e.g. eat, drink.
EXPEL - Actor getting rid of an object from body. e.g. throw, sweat, cry, excrete.


## Slide 18

Script

Script is originally developed to represent knowledge acquired from natural language input. To implement
script, we use conceptual dependency.
A script is composed of:
1.      Entry condition must be true for further execution of the script.
2.      Results or facts are true once the script is executed.
3.      Props or things that make up the content of the script.
4.      Roles are the actions that the individual participant performs.
5.      Scene which represent temporal aspect of script.
6.      Tracks are the variation on script. Different trick may share different component of same script.


## Slide 19

E.g.,Script for man eating in restaurant
                                   Scene l: Get to table
Entry condition:
                                            M PTRANS to D
1.     Man is Hungry.
                                            M PROPEL D
2.     Restaurant should be open.
Result:                                     M ATTEND T
1.     Man has less money.                  M MBUILD For T
2.     Man is less hungry.                  Scene 2: Eat the food
                                                      Track 1: for menu in the table
Props:                                                           M ATTEND ME
1.     Table (T)                                                 M MBUILD F
2.     Menu (ME)                                                 M SPEAK to W
3.     Glass (G)                                                 M ATRANS F from W
4.     Door (D)                                                  M INGEST F
5.     Chair (C)                                      Track 2: for menu not in the table
                                                                 M SPEAK with W for ME
6.     FOOD (F)                                                  M ATRANS ME from W
7.   Restaurant (R)                                              M ATTEND ME
8.   Money(Mo)                                                   M MBUILD F
Roles:                                                           M SPEAK to W
1.     Customer (M)                                              M ATRANS F from W
2.     Waiter (W)                                                M INGEST F
                                            Scene 3: Exit from the restaurant
3.   Chef (Ch)                                        M MOVE
4.   Manager (Ma)                                     M PTRANS to D
                                                      M PROPEL D
                                                      M PTRANS from R


## Slide 20

Thank You
