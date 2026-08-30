# Chapter 4: Logic and Knowledge Representation (Propositional & Predicate Logic)


## Slide 1

       Chapter-4
Knowledge representation
       Lecturer: Sujan Shrestha


## Slide 2

Logic
• Logic means reasoning
• Propositional Logic is the statement in which we can represent the statement in the form of
  either true or false but not both at a time.
  2*2 =4 (T)
  3*3 =10 (F)
• Propositional logic tries to infer from the given statement
Verification can be done with the help of propositional logic.

P : Raju attends the class
Q : Ram attends the class

If Raju attend the class then Ram attend the class

                             PQ


## Slide 3

Propositional Logic
       word           Symbol

        Not             ┐

        AND             ∧

         OR             ˅

      Implies           →

    If and only if     ↔


## Slide 4

                                         Conjunction – and ∧
Propositional Logic                      Disjunction – or -- ˅
                                         Implication - 
                                         Bi-implication ↔
                      Truth Table


   P     Q    ꞀP      P∧Q       P˅Q     P→Q    P↔Q

   T     T     F        T           T    T        T

   T     F     F        F           T    F        F

   F     T     T        F           T    T        F

   F     F     T        F           F    T        T


## Slide 5

Types of logic
• Propositional logic and First-order logic (First –order Predicate Logic).
  Propositional logic - A propositional logic is a declarative sentence
  which can be either true or false but not both or either.
• Propositional logic is a mathematical model that allows us to reason
  about the truth or falsehood of logical expression.
• In propositional logic, there are atomic sentences and compound
  sentences built up from atomic sentences using logical connectives.


## Slide 6

• Tautology - Propositional Logic in which expressions always result True.
• Contradiction - Propositional Logic in which expressions always result False.
• Contingency - Propositional Logic in which expressions result can be either True or False.

Precedence of Order of symbol
• Negation > and > or > implication > bi-implication
• PVQVR
• PꓥQꓥR
• and, or, bi-implication are right-left associative
• Implication are right associative
• PQR
• (P  (Q  R))


## Slide 7

•PꓥQPVQ
  (P ꓥ Q)  (P V Q)
• PQQP
  (P(Q(Q  P)))


## Slide 8

      Equivalence
                                      PVQ        QVP          Commutative
P∧T        P                                                  Laws
                Identity Laws         P∧Q        Q∧P
PVF        P
                                 P V (Q ∧ R)    (P V Q) ∧ (P V R) Distributive
PVT        T                      P ∧ (Q V R)    (P ∧ Q) V (P ∧ R) Laws
               Domination Laws
P∧F        F
                                 P V (Q V R)    (P V Q) V R   Associative
                                 P ∧ (Q ∧ R)    (P ∧ Q) ∧ R   Laws
P∧P        P
               Idempotent Laws
PVP        P
                                 Ꞁ (P ∧ Q)      (Ꞁ P V Ꞁ Q) Demorgan’s
                                 Ꞁ(P V Q)        (Ꞁ P ∧ Ꞁ Q) Laws
Ꞁ (Ꞁ P)    P Double negation


## Slide 9

P V (P ∧ Q)   P
                  Absorption law
P ∧ (P V Q)   P


PVꞀP          T
                  Negation law
P∧ꞀP          F



PQ           ꞀPVQ
 P↔Q          (PQ) ∧ (QP)


## Slide 10

• Premises: a sequence of propositions P1, P2, … and Q is conclusion
• P1 ∧ P2 ∧ P3 ∧ …………. ∧ Pn  Q


• If it is raining, I will need an umbrella   P  Q Modus Ponens
• It is raining.                              P     Tautological form
• I will need an umbrella                     Q     (P ∧ (P Q) )  Q


## Slide 11

                                                  It is hot – A
                                                  It is humid – B
                                                  It is raining – C
                                                  I need an umbrella –D
                                                  I need a bag - E




ꞀP V R
PVQ      ((ꞀPVR) ∧ (P V Q)) Q V R
                                     Resolution
QVR


## Slide 12

Propositional Logic
• It is hot – A
• It is humid – B
• It is raining – C
• If it is humid, then it is hot – B  A
• If it is hot and humid then it is not raining – (A ∧ B) ¬ C

  but , since may be used for and.
• All triangles have three sides.
• Some or every can’t be represented by propositional logic


## Slide 13

First order predicate logic
• Relation(subject)
        John is tall.
        tall(John)

• Relation with subject and object
        Ram likes football
        likes(Ram, football)
• If then statement
        If I study hard then I will pass.
        Study(I)Pass(I)
        Either I don’t study hard or I pass.
         ꞀStudy (I) V pass (I)
                                               King kong
• Subject is Plural
                                               king louis
       Gorilla are Black.
        x : Gorilla(x)  Black(x)             George


## Slide 14

     Every basket ball player are tall
                                                   Basketball player
     x : basketball_player(x)  tall(x)         Ram, Shyam, Hari are
                                              basketball player and all are
                                                           tall
   (basketball_player(ram)  tall(ram))
∧ (basketball_player(Shyam)  tall(shyam))
∧ (basketball_player(hari)  tall(hari) )
                                                      Basketball player
     Some basket ball player are tall          Ram, Shyam basketball player,
      x : basketball_player(x) ∧ tall(x)
                                              ram is tall but shyam is not tall.
                                                   Hari is football player

    (basketball_player(ram) ∧ tall(ram))
 V (basketball_player(Shyam) ∧ tall(shyam))
 V (basketball_player(hari) ∧ tall(hari))


## Slide 15

Some basket ball player are tall                    Basketball player
                                                 Ram, Shyam are tall
 x : basketball_player(x)  tall(x)          Hari is football player hari is
                                                           tall

 ( basketball_player(ram)  tall(ram) )
V( basketball_player(shyam)  tall(shyam) )
V( basketball_player(hari)  tall(hari) )             Gives True


## Slide 16

x
     Conditions and Conclusion
     If students study hard then they will pass.
      x : (Student(x) ∧ Study(x)) Pass(x)


     Some students who study hard doesn’t pass.

      x : Student(x) ∧ Study(x) ∧ Ꞁ Pass(x)

     Some prime number is even number.
     P(x): x is prime number
     e(x): x is even number
      x : P(x) ∧ e(x)
    Every student in this class are either from Nepal or India.
    Student (x) : x is student in this class
    Nepal(x) : belongs to Nepal
    India(x) : belongs to India
               x : Student(x) (Nepal(x) V India(x))


## Slide 17

You can access the internet from campus if and only if you are computer student or you are not freshman
           P ↔ (Q V Ꞁ F)


Some basketball player are not tall

x : B(x) ∧ Ꞁ T(x)



Some people like every kind of food
y [(People(y)) ∧ ( x: food (x)  likes(y,x))]


## Slide 18

Nobody likes everyone (For each person there
is at least one person they do not love.)

∀y ∃x ¬L(y,x)
                                                      Nobody means not some not not everybody
¬ ∃y ∀x L(y,x)




  Some people like every kind of food
    y [ x : likes(y,x)]
     y [ x: food (x)  likes(y,x)]
     y [people (y)  ( x: food (x)  likes(y,x))]


## Slide 19

Ram likes Sita but not Gita.
likes(Ram, Sita)  ¬likes(Ram,Gita)

Ram is a tall guy who likes Sita.
tall(Ram)likes(Ram,Sita)

Ram dislikes children who fights.
x (Children (x)  fight(x)) ( Likes(ram, x))

All basketball players are tall.
x basketball_players(x)  tall(x)

All purple mushrooms are poisonous:
x purple_mushroom(x)  poisonous(x)
OR
x mushroom(x)  purple(x)  poisonous(x)


## Slide 20

Everyone who loves all animals are loved by someone:
∀x [∀y Animal(y) ⇒ Loves(x,y)] ⇒ [∃z Loves(z,x)]
∀x [∀y (Animal(y)) ⇒ Loves(x,y)] ⇒ [∃z Loves(z,x)]

∀x [∀y Animal(y) ⇒ Loves(x,y)] ⇒ [∃y Loves(y,x)]

Everyone who is lucky or studious can pass exam:
x (lucky(x)  studious (x)) passexam(x)
          OR
x (lucky(x)  studious (x))  pass(x,exam)
People love leader only if they are loyal to people.
∀x ∀y love(x,y)  Loyal(y,x)

Everyone is a parent of anyone if everyone is a father of anyone or mother of anyone.
x[y (mother(x,y)  father(x,y))  parent(x,y)]

All people who eats everything are fat and unhealthy.
x [y: eats(x,y)] (fat(x)  unhealthy(x))
          OR
x y: ((People (x)  food(y))  eats(x,y))  (fat(x) ¬healthy(x))


## Slide 21

All students are smart.
∀ x ( Student(x) ⇒ Smart(x) )

There exists a student.
∃ x Student(x).

There exists a smart student.
∃ x ( Student(x) ∧ Smart(x) )

Every student loves some student.
∀ x ( Student(x) ⇒ ∃ y ( Student(y) ∧ Loves(x,y) ))
∀ x ( ∃ y (Loves(x,y) ))

Every student loves some other student.
∀ x ( Student(x) ⇒ ∃ y ( Student(y) ∧ ¬ (x = y) ∧ Loves(x,y) ))

There is a student who is loved by every other student.
∃ x (∀ y ( (Student(y) ∧ ¬(x = y)) ⇒ ( Student(x) ∧ Loves(y,x) ))

Bill takes either Analysis or Geometry (but not both)
Takes(Bill, Analysis) ⇔ ¬ Takes(Bill, Geometry)


## Slide 22

Bill takes Analysis or Geometry (or both).
Takes(Bill, Analysis) ∨ Takes(Bill, Geometry)

Bill takes Analysis and Geometry.
Takes(Bill, Analysis) ∧ Takes(Bill, Geometry)

Bill does not take Analysis.
¬ Takes(Bill, Analysis).

No student loves Bill.
¬ ∃ x ( Student(x) ∧ Loves(x, Bill) )

Bill has at least one sister.
∃ x SisterOf(x,Bill)
∃ x (Sister(x) ∧ SisterOf(Bill,x))

Bill has no sister.
¬ ∃ x Sister(Bill,x)
∀ x ¬ Sister(Bill,x)

Every student takes at least one course.
∀ x ( Student(x) ⇒ ∃ y ( Course(y) ∧ Takes(x,y) ))


## Slide 23

Every student who takes Analysis also takes Geometry.
∀ x ( (Student(x) ∧ Takes(x, Analysis))  Takes(x, Geometry) )




Student who miss the class and are fail in the exam are either ill or
not interested in subject matter.
x : (Student(x) ∧ Miss_class(x) ∧ Fail(x)  Ill(x) V Subject_matter(x)


## Slide 24

Gold and Silver ornaments are precious
G(x): x is a gold ornament
S(x): x is a silver ornament
P(x): x is precious
a) x : (P(x)  G(x) ∧ S(x)
b) x : G(x) ∧ S(x)  P(x)
c)  x : G(x) ∧ S(x)  P(x)
d) x : G(x) V S(x)  P(x)


## Slide 25

Some boys in the class are taller than all the girls
  a)  x : [boy (x)   y [girl(y) ∧ taller(x,y)]]
  b)  x : [boy (x) ∧  y [girl(y) ∧ taller(x,y)]]
  c)  x : [boy (x)   y [girl(y)  taller(x,y)]]
  d)  x : [boy(x) ∧  y [girl(y)  taller(x,y)]]


## Slide 26

• CNF: It stands for Conjunctive Normal Form. In a compound statement, if two
sentences are joined by using AND, then it is called CNF.
• DNF: It stands for Disjunctive Normal Form. In a compound statement if two
  sentences are joined by using OR then it is called DNF


## Slide 27

Resolution
• Convert given facts into FOL
• Convert FOL into CNF
• Negate the statement to be proved.
• Draw Resolution Graph.



• Proof by contradiction: Proof is proved by contradicting the statement
  that need to be proved.
• Proof by extraction: Proof is proved by given statements and we come
  to the statement need to be proved.


## Slide 28

Rules to convert FOL into CNF
• Eliminate ‘’ and ‘↔ ’
• If statement are separated with and then re-write the statement by the help of simplification.
a  b = Ꞁa V b              a ↔ b = (a  b) ∧ (b a)
• Move ‘Ꞁ’ inward
Ꞁ( x: p(x)) =  x : (Ꞁ p(x))
Ꞁ( x: p(x)) =  x : (Ꞁ p(x))
Ꞁ(a V b) = Ꞁa ∧ Ꞁb
Ꞁ (a ∧ b) = Ꞁa V Ꞁb
Ꞁ Ꞁa = a
• Replace Existential quantifier by skolem constant is skolemization
 x: rich(x) = rich(raju)
• Drop universal Quantifier
 x: p(x) = p(raju)
If sentences are separated by and then we can write 2 sentences
P(x) ∧ Q(x)
P(x)
Q(x)


## Slide 29

     Prove Q is true with following FOL.
     1. P  Q
     2. P  S
     3. ┐S

•Step 1: Converting statements into FOL
   • 1.    PQ
   • 2.    PS
   • 3.    ┐S
• Step 2: Converting FOL into CNF                         ┐Q       From (4)
   • i.    PQ
   • ii.   ┐P  S
   • iii. ┐S                                                       PQ from (1)
• Step 3: Negating the statement which has to be proved
     iv. ┐Q
• Step 4: Drawing resolution graph                             P       ¬PS from (2)

                                                                   S       ¬S from (3)

                                                                       f


## Slide 30

1.    Cats like fish
2.    Cat eat everything they like
3.    Upsa is a cat
To prove upsa eat fish


## Slide 31

1.       Cats like fish
2.       Cat eat everything they like
3.       Upsa is a cat
To prove upsa eat fish

Step 1 Convert statement into FOPL
1.           x : cat(x) → like (x, fish)
2.           x [ y(cat (x)) ^ like ( x, y) → eat (x, y)]
3.         cat (Upsa)                                 ¬ eat (Uspa, fish)       ….From (4)
Step 2: Convert FOL to CNF
1.         ¬ cat (x)  like (x, fish)                                       ¬ cat(x)  ¬like (x,y)  eat (x,y)      ….From (2)
2.         ¬ ((cat (x)) ^ like ( x, y))  eat (x, y)
           ¬ cat (x)  ¬ like (x,y)  eat (x, y)
3.         cat (Upsa)                                                ¬cat (Upsa) ¬like(Upsa, Fish)
Step 3 Negate the question
4. ¬ eat (Uspa, fish)
                                                                             ¬cat (x)    like (x, fish)
Step 4: Draw Resolution graph                                                                                    ….From (1)

                                                                     ¬ Cat (Upsa)
                                                                                    Cat (Upsa)             ….From (3)


                                                                             f


## Slide 32

   1.     Rajesh is a megastar.
   2.     Megastar need more money.
   3.     If you need More money then you need to be more
busy.
   To prove:         Is Rajesh more busy?
Step 1 Convert statement into FOPL
1. megastar (rajesh)
2.  x : megastar (x) → need (x, money)
3.  x : need (x, money) → busy (x)
                                                            ¬busy (rajesh)        ….From (4)
Step 2 convert into cnf
1. megastar (rajesh)
2. Ꞁ megastar (x)  need (x, money)                                   ¬need (x, money)  busy (x)         ….From (3)
3. Ꞁ need (x, money)  busy (x)
Step 3: Negation of asked question
4. ¬busy (rajesh)                                              ¬need (rajesh, money)
Step 4: Draw resolution graph
                                                                             ¬megastar (x)  need (x, money)     ….From (2)

                                                                     ¬megastar (rajesh)
                                                                                 megastar ( rajesh)            ….From (1)


                                                                                 f


## Slide 33

Q. 1.    Everyone passing the exam and winning the lottery is
happy.
   2.    Everyone who studies or lucky can pass the exam.
   3.    Ram didn't study but he is lucky.
   4.    Everyone who is lucky wins the lottery.
         To prove Ram is happy.


## Slide 34

Q.1.      Everyone passing the exam and winning the lottery is happy.
  2.      Everyone who studies or lucky can pass the exam.
  3.      Ram didn't study but he is lucky.
  4.      Everyone who is lucky wins the lottery.
          To prove Ram is happy.
                                                           ¬happy (Ram)     ……From (5)
Step 1 : Converting the given statements into FOL
1.  x : (pass (x, exam)) ^ win (x, lottery)) → happy(x)
2.  x : (study (x)  lucky (x)) → pass(x, exam)
                                                                    ¬pass (x, exam)  ¬win (x, lottery)  happy (x)
3. ¬study (Ram) ^ lucky (ram)
                                                                                                                ……From (1)
4.  x : lucky (x) → wins (x, lottery)
Step 2 Converting FOL into CNF                                ¬pass (ram, exam)  ¬ win (ram, Lottery)
1. ¬ pass (x, exam)  ¬ win (x, lottery)  happy (x)                      ¬lucky (x)  win (x, lottery)       ……From (4)
2. (¬ study (x) ^ ¬lucky (x))  pass (x, exam)
 (¬ study (x)  pass (x, exam)) ^                                  ¬pass (ram, exam)  ¬ lucky(ram)
(¬ lucky (x)  pass (x, exam))
   i) ¬ study (x)  pass (x, exam)                                                ¬lucky (x )  pass (x, exam)
  ii) ¬ lucky (x)  pass (x, exam)                                                                               ……From 2 (ii)
3. i)      ¬ study (Ram)                                                ¬ lucky (ram)
    ii)    lucky (Ram)
4. ¬lucky (x)  win (x, lottery)                                                      lucky (ram)         ……From 3 (ii)
 Step 3
    ¬happy (Ram)
                                                                                  f


## Slide 35

a) Ravi likes all kind of food  X : food(x)  likes(Ravi,x) Food(apple) ∧ Food(chicken)
                                                                  a) Food (apple)
b) Apple and chicken are food                                     b) Food (chicken)
c) Anything anyone eats and is not killed is food                       y [ x : eats(y, x) ∧ Ꞁ killed(y)  food(x)]
                                                                        y [ x : eats(y, x) ∧ alive(y)  food(x)]
d) Ajay eats peanuts and still alive Eats(ajay, peanuts) ∧ alive (ajay)
e) Rita eats that Ajay eats      X :Eats(Ajay, x)  eats(Rita,x)

Prove
Ravi likes Peanuts                  Likes(Ravi, Peanuts)


Converting FOL into CNF)
                                                           2) Food(apple) ∧ Food(chicken)
1) Ꞁ food(x) V likes(Ravi,x)                               a) Food (apple)
                                                           b) Food (chicken)
3) Ꞁ[ eats(y,x) ∧ alive (y) ] V food(x)
   Ꞁ eats(y,x) V Ꞁ (alive(y)) V food(x)
    Ꞁ eats(y,x) V Ꞁ alive(y) V food(x)                     4) Eats(ajay, peanuts) ∧ alive (ajay)
                                                           i) Eats(ajay, peanuts)
                                                           ii) alive (ajay)

5) Ꞁ Eats(Ajay, x) V eats(Rita,x)                          Step 3
                                                           Negate the statement that has to be proved
                                                           6) Ꞁ Likes(Ravi, Peanuts)


## Slide 36

Ꞁ likes(ravi, peanuts)       ……… From (6)

                           Ꞁ food(x) V likes(ravi,x)                ……… From (1)



                  Ꞁ food(peanuts)

                                         Ꞁ eats(y,x) V Ꞁ alive(y) V food(x)          ……… From (3)


                         Ꞁ eats(y,peanuts) V Ꞁ alive(y)
                                                          Eats(ajay, peanuts)
                                                                                    ……… From 4 (ii)


                                          Ꞁ alive(ajay)
                                                              alive(ajay)          ……… From 4 (i)



                                                          f


## Slide 37

              Assume the following facts
              i) Horses, cow, pigs are mammals
              ii) An offspring of a horse is a horse
              iii) Bluebeard is a horse
              iv) Bluebeard is Charlie’s parent
              v) Offspring and parent are inverse relations
              vi) Every mammal has a parent
              Prove Charlie is a horse using extraction method
 Step 1: Convert facts into FOL                               Step 2: Convert FOL into CNF
1. x horse (x) V cow(x) V Pig(x) → mammal(x)                         1. (i) Ꞁ horse (x) V mammal (x)
   x horse (x) → mammal (x)                                              ii) Ꞁ cow (x) V mammal (x)
   x cow (x) → mammal (x)                                                iii) Ꞁ pig (x) V mammal (x)
   pig (x) → mammal (x)                                               2. Ꞁ [offspring (x, y) ^ horse (y)] V horse (x)
 2.  x  y : offspring (x, y) ^ horse (y) → horse (x)
                                                                         Ꞁ offspring (x, y) V Ꞁ horse (y) V horse (x)
 3. horse (bluebeard)
                                                                      3. horse (bluebeard)
 4. parent (bluebeard, charlie)
                                                                      4. parent (bluebeard, charlie)
 5.  x  y: offspring (x, y)  parent (y, x)               5. [offspring (x, y) → parent (y, x)] ^ [ parent (y, x) → offspring (x, y)]
 6.  x  y: mammal (x) → parent (y, x)                               5.i) Ꞁ offspring (x, y) V parent (y, x)]
                                                                        ii) Ꞁ parent (y, x) V offspring (x, y)]

                                                                      6. Ꞁ mammal (x) V parent (y, x)


## Slide 38

horse(bluebeard)     ……….(3)
              Ꞁ offspring (x, y) V Ꞁ horse (y) V horse (x)     …… (2)



      Ꞁ offspring (x,bluebeard) V horse (x)
                               Ꞁ parent (y, x) V offspring (x, y)           ….5 (ii)



                   Ꞁ parent (bluebeard, x) V horse (x)

                                              parent (bluebeard, charlie)     …..(4)



                                  horse (charlie)


## Slide 39

Consider the following axioms or facts.


         a.        Marcus is a man.
         b.        Marcus is a pompian.
         c.        All pompians are roman.
         d.        Caesar is a ruler.
         e.        All romans are either loyal to or hated Caesar.
         f.        Everyone is loyal to someone.
         g.        People only try to assassinate ruler if they aren't loyal.
         h.        Marcus tried to assassinate Caesar.
                   Prove Marcus hate Caesar by resolution refutation


## Slide 40

Unification
Unification is a process of making two different logical atomic expressions identical by finding a substitution.
Unification depends on the substitution process.
It takes two literals as input and makes them identical using substitution.
Let Ψ1 and Ψ2 be two atomic sentences and 𝜎 be a unifier such that, Ψ1𝜎 = Ψ2𝜎, then it can be expressed
as UNIFY(Ψ1, Ψ2).
Example: Find the MGU(most general unifier) for Unify{King(x), King(John)}
Let Ψ1 = King(x), Ψ2 = King(John),
Substitution θ = {John/x} is a unifier for these atoms and applying this substitution, and both expressions will
be identical.
The UNIFY algorithm is used for unification, which takes two atomic sentences and returns a unifier for those
sentences (If any exist).
Unification is a key component of all first-order inference algorithms.


## Slide 41

It returns fail if the expressions do not match with each other.
The substitution variables are called Most General Unifier or MGU.
E.g. Let's say there are two different expressions, P(x, y), and P(a, f(z)).
In this example, we need to make both above statements identical to each other. For this, we will perform the substitution
                                                                P(x,y).........(i)
                                                               P(a, f(z))......... (ii)
Substitute x with a, and y with f(z) in the first expression, and it will be represented as a/x and f(z)/y.
With both the substitutions, the first expression will be identical to the second expression and the substitution set will be: [a/x, f(z)/y].
E.g. P(a, g(x, a), f(y)), Q (a, g(f(b), a), x)
     Substitution set = {a/a, f(b) /x , x / f(y) }
                          = {a/a, f(b) /x , f(b) / f(y) }
                            = {a/a, f(b)/ x, b/y}


## Slide 42

Horn clause
•         (P1 ^ P2 ^ P3 ^ P4) → Q
•         ¬ (P1 ^ P2 ^ P3 ^ P4)  Q
•         (¬ P1  ¬P2  ¬P3  ¬P4)  Q
•         Statement +ve others all -ve
• A horn clause is a disjunction of literal with at-most 1 positive literal and all other literals are -ve.


## Slide 43

Rule based deduction system
Forward chaining
• When it is based on available data. It data driven technique. It works from an initial state and reach to goal state.
E.g.
• If a boy is fast and tall, then he is a sports boy.
•  x : tall (x) ^ fast (x) → sports boy (x)


                                tall (x)                             fast (x)

                                               sports boy (x)


## Slide 44

a.        It is crime for an American to sell weapons to enemy of America.
b.        Nono is an enemy of America.
c.        Nono has some missiles.
d.        Missiles are weapon.
e.        Colonel is an American.
f.        If nono has missiles then those missiles were sold to Nono are by Colonel.



Prove that: colonel is a criminal


## Slide 45

                                                                  Step 1
a.        It is crime for an American to sell weapons to a. x y z (Weapon (z) ^ American (x) ^ sell (x, y, z) ^ enemy (y, x)) → criminal (x)
enemy of America.                                        b. enemy (Nono, America)
b.        Nono is an enemy of America.                   c.  m : has (Nono, m) ^ missles (m)
c.        Nono has some missiles.                        d. m : missiles (m) → weapon (m)
d.        Missiles are weapon.                           e. American (Colonel)
e.        Colonel is an American.                        f. m : missiles (m) ^ has (Nono, m) → Sell (Colonel, Nono, m)
f.        If nono has missiles then those missiles were              Criminal (colomel)
sold to Nono are by Colonel.
          Prove that: colonel is a criminal by forward
chaining method.
                                         enemy (Nono, A) has (Nono, m)                        Missile (m)          American (Colonel)


                                                                                              Weapon ( m)



                                                      sell (Colonel , nono, m)

                                                                                        Criminals (Colon el)


## Slide 46

Backward Chaining
- Goal driven technique
- We start from goal state then goes towards each condition to be true.
- if all facts can be obtained from FOPL then the problem can be proved.
E.g.
• If a boy is fast and tall, then he is a sports boy.
•  x : tall (x) ^ fast (x) → sports boy (x)



                                              Sports_boy(x)




                     tall(x)                                         fast(x)


## Slide 47

  Backward Chaining
                          Criminals (Colonel )



American(Colonel) enemy(Nono,America) Weapons(z)   sell (Colonel, Nono, z)



                                                      Missile (z) has(Nono, z)


## Slide 48

Probability And Bayes’ Theorem


## Slide 49

• Pre-test probability (~ prevalence)
• This is the proportion of people in the population at risk who have
  the disease at a specific time or time interval, i.e. the point
  prevalence or the period prevalence of the disease. In other
  words, it is the probability − before the diagnostic test is
  performed − that a patient has the disease. Pre-test probabilities
  may be estimated from routine data, practice data or clinical
  judgement.
• Post-test probability
• This is the proportion of patients testing positive who truly have
  the disease. It is similar to the positive predictive value but apart
  from the test performance also includes a patient-based
  probability of having disease


## Slide 50

Random variable
  A random variable (also called random quantity, aleatory
  variable, or stochastic variable) is a mathematical
  formalization of a quantity or object which depends
  on random events.


## Slide 51

Statistical Reasoning
• In the logic based approaches described, we have assumed that everything is either
  believed false or believed true.
• However, it is often useful to represent the fact that we believe, something is probably
  true, or true with probability 0.65.
• This is useful for dealing with problems where there is randomness and unpredictability
  (such as in games of chance) and also for dealing with problems where we could, if we
  had sufficient information, work out exactly what is true.
• To do all this in a principled way requires techniques for probabilistic reasoning.
• Probability quantifies the uncertainty of the outcomes of a random variable / event.
• Real world applications are probabilistic in nature, and to represent the relationship
  between multiple events, we need a Bayesian network.


## Slide 52

Review of Probability Theory
• Marginal probability is the probability of an event, irrespective of
  other random variables.
   • Marginal Probability: The probability of an event irrespective of the
     outcomes of other random variables, e.g. P(A).
• The joint probability is the probability of two (or more) simultaneous
  events, often described in terms of events A and B from two
  dependent random variables, e.g. X and Y. The joint probability is
  often summarized as just the outcomes, e.g. A and B.
   • Joint Probability: Probability of two (or more) simultaneous events, e.g. P(A
     and B) or P(A, B).
• The conditional probability is the probability of one event given the
  occurrence of another event, often described in terms of events A
  and B from two dependent random variables e.g. X and Y.
   • Conditional Probability: Probability of one (or more) event given the
     occurrence of another event, e.g. P(A given B) or P(A | B).


## Slide 53

Review of Probability Theory
• The joint probability can be calculated using the conditional probability :

                                                     P(A, B) = P(A | B) * P(B)
• The joint probability is symmetrical : P(A, B) = P(B, A)




• The conditional probability can be calculated using the joint probability:




• The conditional probability is not symmetrical : P(A | B) != P(B | A)



                                                       P(A | B) = P(A, B) / P(B)


## Slide 54

Bayes’ Theorem
• In statistics and probability theory, the Bayes’ theorem (also
  known as the Bayes’ rule) is a mathematical formula used to
  determine the conditional probability of events.
• Essentially, the Bayes’ theorem describes the probability of an
  event based on prior knowledge of the conditions that might be
  relevant to the event.
• The Bayes’ theorem is expressed in the following formula:
                                                   P B|A P A
                                           P A|B =
                                                      P B
   • Where:
   • P(A|B) – the probability of event A occurring, given event B has
     occurred
   • P(B|A) – the probability of event B occurring, given event A has
     occurred
   • P(A) – the probability of event A
   • P(B) – the probability of event B
   • Note that events A and B are independent events


## Slide 55

(Probabilistic) statistical reasoning
P(AB) = P(B) * P(A/B)
Reasoning is the process by which we use the knowledge and we have to draw conclusion or infer something new about a domain or interest. In
the logic based approach, we have assumed that everything is either true or false. However, it is often that the fact are probably true with
probability 0.5, 0.6, etc. This is useful for dealing with problems where there is randomness or unpredictability.
Simply probability deals with unconditional events if we know probability of even A as P(A) and probability of event B as P(B), then probability
that both occur is represented by
P(AB) = P(A) * P(B)
If 2 events are conditional or interdependent the outcome of 1 affects that of other then probability that both occur is represented by P(AB) =
P(B) * P(A/B)


3R, 2B                    3R, 4B
Probability of selecting bag A P(A) = 0.7
Probability of selecting bag B P(B) = 0.3


Probability of getting red ball given from A P(R/A)= 3/5=0.6
Probability of getting red ball from A P(A ^ R) = P(A) * P(R/A) = 0.7 * 0.6 = 0.42
Red ball is already selected, Probability of getting red ball from A ( this type is question is called reverse probability
                                          = P(A) * P(R/A) / (P(A) * P(R/A) + P(B) * P(R/B )
                                          = (0.7 * 3/5 ) / ((0.7*0.6) + 0.3 * 3/7)
                                          = 0.76


## Slide 56

    3/5   R

A
    2/5

          B



    3/7   R

B

    4/7   B


## Slide 57

Nepal is playing a cricket match with Bangladesh. The probability of
winning the toss for Nepal is 0.7. If Nepal wins the toss then chances of
winning the game is 80%. If Nepal loss the toss then the chances of
winning the match is just 30 %. Find the probability of
i) winning the match
ii) Winning the toss if match is already won.


## Slide 58

  Nepal is playing a cricket match with Bangladesh. The probability of winning the toss for Nepal is 0.7. If Nepal
  wins the toss then chances of winning the game is 80%. If Nepal loss the toss then the chances of winning the
  match is just 30 %. Find the probability of
  i) winning the match
  ii) Winning the toss if match is already won.




                                                                 Probability of winning game.
                                                                 = P(T) ×P(W/T) + P(~ T) ×P(W/ ~T)
                                                                 = 0.7 × 0.8 + 0.3 × 0.3
                                                                 = 0.65
Toss
                                                                Winning the toss if match is already won
                                                                = P(T) ×P(W/T) / (P(T) ×P(W/T) + P(~ T) ×P(W/ ~T))
                                                                =0.7 ×0.8 / 0.65
                                                                = 0.56/0.65
                                                                = 0.86


## Slide 59

1% of people have a certain genetic defect. 90% of tests
for the gene detect the defect (true
positives). 9.6% of the tests are false positives. If a person
gets a positive test result, what are the odds
they actually have the genetic defect?


## Slide 60

  Bayesion Network/ Belief/ Directed
   arrow graph
  • If node xi has no parent, then its probability is said to be unconditional and it is written as p(x). The node
  having parents are called conditional node and probability of conditional node is written as:
  • p(xi/ parent (xi))
  • If value of node is observed the node is evidence node.
                                         A
                                                                        P(all true)
                                 C              D            B             = P(A) * P(B) * P(C/A) * P(D/A,B)
                                                                           = 0.3 * 0.7 * 0.4 *0.7
P(A) = 0.3
P(B) = 0.7                                                                 = 0.0588
P(C/A)= 0.4         P(all true except A and B)                             P(all true except A)
P(C/~A)= 0.3           = P(~B) * P(C/~A) * P(D/~A, ~B) × P(~A)             = P(B) * P(C/~A) * P(D/~A,B) × P(~A)
P(D/A,B)= 0.7                                                              = 0.7 × 0.3 × 0.2 * (1 – 0.3)
                       = (1-0.7) × 0.3 × 0.01 * (1 – 0.3)
P(D/~A,B)= 0.2
                       =                                                   = 0.042 × 0.7
P(D/A,~B)= 0.3
P(D/~A,~B)= 0.01                                                           = 0.0294


## Slide 61

                                                               i)P(P1 and P2 call when no burglary & earthquake if alarm is ringing)
  P(B)                                       P(E)              ii)P(P1 and P2 call when no burglary & earthquake if alarm isn’t ringing)
Burglary                                 Earthquake

                      Alram       P(A)

 P1 calls    P (P1)                      P2 calls     P (P2)


         P(B) = 0.001, P(E) = 0.002                              P(P1 and P2 call when no burglary & earthquake if alarm is ringing)
                                                                    P (A /~B, ~E) = 0.001
     B          E          P(A)                                     P(A/ ~B, E) = 0.94
     T          T          0.95                                     P(P1/A) = 0.9
     T          F          0.94                                     P(P2/A) = 0.7
     F          T          0.29                                     = P(~B)*P(~E) * P(A/~B,~E)* P(P1/A) * P(P2/A)
     F          F         0.001                                     = 0.999 * 0.998 * 0.001* 0.9 *0.7
                                                                    =      6.281 × 10–4
                                                                 P(P1 and P2 call when no burglary & earthquake if alarm isn’t ringing)
                                                                 = P(~B) * P(~E) * * P(~A/~B,~E) * P(P1/~A) * P(P2/~A)
     A          P1                          A         P2
                                                                    = 0.999*0.998*0.999*0.05*0.01
     T          0.9                         T         0.7           All true:
     F         0.05                         F         0.01          P(E) * P(B) * P(A/E,B) * P(P1/A) * P(P2/A)
                                                                    = 0.002 × 0.001 × 0.95 × 0.9 × 0.7
                                                                    = 1.197 × 10–6


## Slide 62

Thank
 you
