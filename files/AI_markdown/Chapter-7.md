# Chapter 7: Neural Networks


## Slide 1

Chapter 7
application of AI
(21-24marks)
 Lecturer: Sujan Shrestha

 Lecturer : Sujan Shrestha
 Phn no: 9801104103
 Email id: shrestha.sujan1400@gmail.com


## Slide 2

Neural network

   Artificial neural networks (ANN) are computing systems vaguely inspired by the biological
neural networks that constitute animal brains.

   The neural network itself is not an algorithm, but rather a framework for many different machine
learning algorithms to work together and process complex data inputs.
   Computers and the Brain: A Contrast
     o   Arithmetic: 1 brain = 1/10 pocket calculator
     o   Vision:           1 brain = 1000 super computers
     o   Memory of arbitrary details:   computer wins
     o   Memory of real-world facts:    brain wins
     o   A computer must be programmed explicitly
   The brain can learn by experiencing the world


## Slide 3

Human brain vs AI

  Parameters           Computer             Brain
  Complexity           Ordered     Structure 10^10 neurons, 10^4
                       serial Processor      connections
  Processor     Speed 10000000             100
  (operation      per
  second)
  Computational       One operational at a Millions           of
  Power               time,                operations at a time,
                      1or 2 inputs at a 10^4 inputs at a time
                      time


## Slide 4

Analogy between human brain and
neural network
                 Component analogy between biological neural network and
                 artificial neural network


                 The Neuron -   A Biological Information Processor
                 Dendrites -    the receivers
                 Soma -         neuron cell body (sums input signals)
                 Synapse -      point of transmission neuron activates after a
                                certain threshold is met
                 Axon -         the transmitter


## Slide 5

      Basic neural network model

                                            i) Inputs: Inputs are considered as features and each feature can
                                             support values. These values are taken from the environment or
 x1                                          training dataset. E.g., no of rooms, area of house, location of house
           w1                                can be inputs for predicting the price of house. Each input can have
                         Activation          different values like no room can be 4, 5, 6 etc.
      w2            Oi                Oj    ii) Weights: They are the values which signifies how important the
x2                                       y input or features or dimensions is to make prediction. For example,
                                             location play more role to make decisions than no of room and area
                                             of house so we assign more weight to location.
                                            iii) Bias: The bias b has the effect of applying a transformation to the
 xn    wn                                    weighted sum and is an external parameter of the neuron.
                                            iv) Adder: This component helps to collect or add all the values.

                                              v) Activation function: Activation function limits the amplitude of
                                               the neuron which helps to analyze the result in a convenient way.


## Slide 6

          Activation Function:
  Activation functions refer to the functions used in neural networks to compute the
weighted sum of input and biases, which is used to choose the neuron that can be fire or
not. It controls the presented information through some gradient processing, normally
gradient descent. It produces an output for the neural network that includes the
parameters in the data.
  Activation function can either be linear or non-linear, relying on the function it shows. It
is used to control the output of outer neural networks across various areas, such as
speech recognition, segmentation, fingerprint detection, cancer detection system, etc.
  In the artificial neural network, we can use activation functions over the input to get
the precise output. These are some activation functions that are used in ANN.


                                                1

 a) step function

                               0        threshold


## Slide 7

y = c + (Oi – c) / (d - c)


## Slide 8

McCulloch/Pitts Neuron

        One of the first neuron models to be implemented
        Its output is 1 (fired) or 0
        Each input is weighted with weights in the range -1 to + 1
        It has a threshold value, T


x1                                                               The neuron fires if the following inequality is true:
            w1
x2          w2  0                                               x1w1 + x2w2 + x3w3 > T
                                                                 In neural network, we have to assign the weight
            w3                                                   and threshold of the neuron such that it satisfies the
x3                                                               value for all of the data-set.


## Slide 9

    Example: Construct an MCP (McCulloch/Pitts) neuron which will implement the
     function of OR gate below:




X1         X2    Y
0          0     0
0          1     1
                                                   Each line of the function table places conditions on the unknown values:
1          0     1
1          1     1                                 If x1= 0, x2 = 0, w1=w2= any value then x1  w1 + x2  w2 = 0 < T
PROBLEM: find the threshold, T and the weights
w1 and w2                                      If x1= 0, x2 = 1, w1=w2= any value then x1  w1 + x2  w2 = w2 > T
Y is 1 if x1  w1 + x2  w2 > T
                                               If x1= 1, x2 = 0, w1=w2= any value then x1  w1 + x2  w2 = w1 > T
      x1
                                                   If x1= 1, x2 = 1, w1=w2= any value then x1  w1 + x2  w2 = w1 + w2 > T
                 w1  0
                  w2
      x2                                                               w1 and w2 = 0.7 T = 0.5 works


## Slide 10

       Hebbian Learning


   The oldest and most famous of all learning rules is Hebb’s postulate of learning:
   Hebb’s Algorithm
   Step 0: Initialize all weights to 0
   Step 1: Given a training input(s) with its target output(t)set the activations of the input units: xi = si
   Step 2: Set the activation of the output unit to the target value: y = t from training set.
   Step 3: Adjust the weights: wi(new) = wi(old) + xi  y
   Step 4: Adjust the bias: b(new) = b(old) + y
   Step 5: Continue until all the conditions are satisfied. Use the testing criteria to validate the weight obtained.



## Slide 11

    Construct a Hebb Net which performs like an AND function, that is,
     only when both features are “active” will the data be in the target
     class. TRAINING SET is given below(with the bias input always at 1):




                                                      X1        X2          t
                                                      1          1          1
                                                      1         -1          -1
                                                      -1         1          -1
 b
                                                      -1        -1          -1
x1
                w1       0         t
                 w2
x2


## Slide 12

                         Ist training data (X1, X2, t) = (1, 1, 1)
                         Update the weights:
b=0
                         W1(new) = W1(old) + X1  t = 0 + 1 = 1
x1 =1
        w1=0  0   t=1
                         W2(new) = W2(old) + X2  t = 0 + 1 = 1
         w2=0
x2 =1
                         b(new) = b(old) + t = 0 + 1 = 1

                                                    b =1
                                                      x1
                                                                     w1=1  0
                                                                      w2=1
                                                      x2


## Slide 13

b =1
x1=1
                   w1=1  0                   t= -1
                    w2=1
x2= -1
                                                      b =0
2nd training data (X1, X2, t) = (1, -1, -1)
                                                      x1
                                                             w1=0  0
Update the weights:
W1(new) = W1(old) + X1 t = 1 + 1(-1) = 0
                                                              w2=2
                                                      x2
W2(new) = W2(old) + X2 t = 1 + (-1) (-1) = 2
b(new) = b(old) + t = 1 + (-1) = 0


## Slide 14

b =0
x1= -1
                   w1=0  0                   t= -1
                    w2=2
x2= 1
                                                      b =-1
3rd training data (X1, X2, t) = (-1, 1, -1)
                                                      x1
Update the weights:                                           w1=1  0
W1(new) = W1(old) + X1 t = 0 + (-1) (-1) = 1
                                                               w2=1
                                                       x2
W2(new) = W2(old) + X2 t = 2 + 1(-1) = 1

b(new) = b(old) + t = 0 + (-1) = -1


## Slide 15

b =-1
x1= -1
                   w1=1  0                t= -1
                    w2=1
 x2= -1
                                                   b =-2
4th training data (X1, X2, t) = (-1, -1, -1)
                                                   x1
 Update the weights:                                       w1=2  0
W1(new) = W1(old) + X1 t = 1 + (-1) (-1) = 2
                                                            w2=2
                                                    x2
W2(new) = W2(old) + X2 t = 1 + (-1) (-1) = 2

b(new) = b(old) + t = -1 + (-1) = -2


## Slide 16

     Validation

X1     X2   Y

1      1    1              Y is 1 if x1  w1 + x2  w2 + b > T
1      -1   -1             Let us take T = 0
-1     1    -1

-1     -1   -1
                                                   1st case: 12 + 12 + (-2) = 2 > 0
                                                
            b =-2                                  2nd case: 12 + (-1)2 + (-2) = -2 < 0
                                                
             x1                                    3rd case: (-1)2 + 12 + (-2) = -2 < 0
                    w1=2  0                    
                                                  4th case: (-1)2 + (-1)2 + (-2) = -6 <0
                     w2=2                         Hence this satisfies all the truth table so
             x2                                 we stop here.


## Slide 17

Perceptron
   The Perceptron is one of the earliest and most fundamental models of an artificial neuron,
introduced by Frank Rosenblatt in 1958. It is a supervised learning algorithm used for binary
classification problems where the data is linearly separable.
   The perceptron consists of:
   Input units x1,x2,…,xn
   Associated weights w1,w2,…,wn
   A bias term b
   An activation (threshold) function.


Mathematical Model:
   The net input to the perceptron is given by:




This makes the perceptron a linear classifier, as it separates classes using a hyper-plane.


## Slide 18

      Perceptron Learning Rule
 The perceptron learns by iteratively adjusting its weights based on classification
  errors.
Update rule
    If t=y: no update

    If t≠y: weights are corrected

Learning Rule:
 Weights are updated only when the perceptron misclassifies an input.

wnew=wold+α(t−y)xi
bnew=bold+α(t−y)
where:
t = target output
y = actual output


## Slide 19

Perceptron Algorithm:
   Step 0: Initialize all weights and bias randomly.
   Step 1: Present a training input vector
x = (x1, x2, …, xn) with target output t ∈ {+1, −1}
   Step 2: Compute the net input:
net = Σ xi wi + b
   Step 3: Compute output using step function:
y = Θ(net)
   Step 4: Update weights:
wi(new) = wi(old) + α (t − y) xi
   Step 5: Update bias:
b(new) = b(old) + α (t − y)
   Step 6: Repeat until all training patterns are correctly classified.
   Decision Rule/Validation rule
     y = +1 if Σ xi wi + b ≥ 0


## Slide 20

    Construct a perceptron which performs like an AND function, that is, only
     when both features are “active” will the data be in the target class.
     TRAINING SET is given below(with the bias input always at 1):


                          X1        X2       t
                          1         1         1
                          1         -1       -1
                                                       Assumptions (Standard)
                          -1        1        -1        •Learning rate: α=1
                          -1        -1       -1        •Initial weights:
                                                       w1=0, w2=0
                                                       •Bias: b=0
    b                                                  •Activation function:

x1                                                               +1      if w1x1+w2x2+b≥0
                w1       0          t
                                                       y =
                 w2                                              −1      otherwise
x2


## Slide 21

        Epoch 1




                                   1st training data (X1, X2, t) = (1, 1, 1)
                                   Net input:
b=0                                v=0(1)+0(1)+0 = 0
                                   Hence, y=1
x1 =1                              Correct → No update
                  w1=0  0   t=1
                   w2=0
x2 =1
                                               b =0
                                                  x1
                                                                   w1= 0  0
                                                                    w2= 0
                                                  x2


## Slide 22

                                             2nd training data (X1, X2, t) = (1, -1, -1)
                                             Net input:
                                             v=0(1)+0(-1)+0 = 0
                                             Hence, y=1
                                             Wrong → Update weights

                                             Update weights:
                                             wi(new) = wi(old) + α (t − y) xi
b =0
 x1= 1                                       Update bias:
                  w1= 0  0          t= -1   b(new) = b(old) + α (t − y)
                   w2= 0
 x2 = -1
                                                           b =-2
                                                            x1
                                                                                w1= -2  0
                                                                                 w2= 2
           w1=0 + 1(−1 −1)(1) = −2                           x2
           w2=0 + 1(−1- 1)(−1) = 2
           b=0 + 1(−1 −1) = −2


## Slide 23

                                    3rd training data (X1, X2, t) = (-1,1, -1)
                                    Net input:
                                    net=(−1)(−2)+1(2)+(−2)=2+2−2=2
                                    Hence, y=1
                                    Wrong → Update weights

                                    Update weights:
                                    wi(new) = wi(old) + α (t − y) xi
b =-2
x1= -1                              Update bias:
               w1= -2  0   t= -1   b(new) = b(old) + α (t − y)
                w2= 2
 x2 = 1
                                       b = -4
                                           x1
                                                                  w1=0  0
                                                                   w2=0
    w1=−2+1(−2)(−1)=0                      x2
    w2=2+1(−2)(1)=0
    b=−2+1(−2)=−4


## Slide 24

                               4th training data (X1, X2, t) = (-1,-1, -1)
                               Net input:
                               net=(−1)(0)+(−1)(0)+(−4)=−4
                               Hence, y=-1
                               True → No Update weights



b =-4
   x1= -1
            w1=0  0   t= -1
             w2=0
   x2= -1
                                  b = -4
                                     x1
                                                      w1=0  0
                                                       w2=0
                                     x2


## Slide 25

     Validation

X1     X2      Y

1      1        1           Y is 1 if x1  w1 + x2  w2 + b > T
1      -1      -1           Let us take T = 0
-1     1       -1

-1     -1      -1
                                              1st case: 10 + 10 + (-4) = -4 > 0(F)

            b =-4                             2nd case: 10 + (-1)0 + (-4) = -4 < 0 (T)

                x1                            3rd case: (-1)0 + 10 + (-4) = -4 < 0 (T)
                     w1=0  0
                      w2=0                    4th case: (-1)0 + (-1)0 + (-4) = -4 < 0 (T)
                x2                            Hence this satisfies all the truth table so we stop here.


## Slide 26

Epoch 2
Current weights:
w1=0, w2=0, b=−4
Pattern 1: (1,1), t=1        Pattern 2: (1,-1),        Pattern 3: (-1,1),   Pattern 4: (-1,-1), t=-
net=−4                       t=-1                      t=-1                 1
⇒y=−1                        net=2−2−2=−2              net=−2+2−2=−2        net=−2−2−2=−6
error                        ⇒y=−1                     ⇒y=−1                ⇒y=−1
t-y = 2                      No update                 No update            No update
Update:
w1=0+2(1)=2                                       Final Weights
w2=0+2(1)=2                                       (Converged)
b=−4+2=−2                                         w1=2,w2=2,b=−2

                                   Verificatio
                                   n
                        x₁      x₂      net       y      t
                        1       1       2         1      1
                        1       −1      −2        −1     −1
                        −1      1       −2        −1     −1
                        −1      −1      −6        −1     −1


## Slide 27

Adaline Network
   It is slightly variation on the perceptron network. Inputs are +1 or 1 and outputs are +1 or 1 and uses a bias input.
   Differences
    Adaline network is trained using the Delta Rule which is also known as the least mean squares (LMS) or Widrow-Hoff rule the
activation function, during training is the identity function. After training the activation is a threshold function
   Adaline Algorithm
   Step 0: Initialize the weights to small random values and select a learning rate, α
   Step 1: For each input vector s, with target output t, set the inputs to node
   Step 2: Compute the neuron inputs
    y_in = b + Σ (xi  wi)
   Step 3: Use the delta rule to update the bias and weights
    b(new) = b(old) + α (t  y_in)
    wi(new) = wi(old) + α (t  y_in) xi
   Step 4: Stop if the largest weight change across all the training samples is less than a specified tolerance, otherwise cycle
through the training set again


## Slide 28

    The performance of an ADALINE neuron depends heavily on the choice of the
learning rate.
   if it is too large, the system will not converge
   if it is too small, the convergence will take too long
   Typically, α is selected by trial and error.
   typical range: 0.01 < α < 10.0
   often start at 0.1
   sometimes it is suggested that 0 < nα < 1.0
   where n is the number of inputs
     One unique feature of ADALINE is that its activation function is different for
training and running. When running ADALINE use the following:
   initialize the weights to those found during training
   compute the net input
   apply the activation function
   Neuron input
   y_in = b + Σ (xi  wi)


## Slide 29

Example – AND function                            Initial conditions: Set the weights to small random values.
Construct an AND function for an ADALINE neuron   Let b = 0.1, w1 = 0.2, w2 = 0.3
let α = 0.1
x1      x2     Y
                                                                 1
1       1      1
                                                                              0.1
1       1     1
                                                           x1 = 1             0.2  0
1      1      1
                                                                               0.3
1      1     1
                                                           x2 = 1


## Slide 30

                      First Training Run
                      Apply the input (1,1) with output 1
                      The net input is:
                      y_in = b + Σ (xi  wi)
                      y_in = 0.1 + 0.2  1 + 0.3  1 = 0.6
                      Delta rule:
    1
         0.1          b(new) = b(old) + α (t – y_in)
x1 = 1   0.2  0      wi(new) = wi(old) + α (t – y_in) xi
          0.3         The new weights are:
x2 = 1
                      b = 0.1 + 0.1(1 – 0.6) = 0.14
                      w1 = 0.2 + 0.1(1  0.6)1 = 0.24
                      w2 = 0.3 + 0.1(1 0.6)1 = 0.34
                      The largest weight change is 0.04.


## Slide 31

                        Second Training Run
                        Apply the second training set (1, –1)
                         with output –1.
     1                  The net input is:

           0.14         y_in = 0.14 + 0.24  1 + 0.34  (–1) =

x1 = 1    0.24  0       0.04
                        The new weights are:
           0.34         b = 0.14 + 0.1 (-1 - 0.04) = 0.04
x2 = –1                 w1 = 0.24 + 0.1 (-1 - 0.04) 1 = 0.14
                        w2 = 0.34 + 0.1 (-1 - 0.04) (-1) = 0.44
                        The largest weight change is 0.1.


## Slide 32

                        Third Training Run
                        Apply the third training set (–1, 1) with
                         output –1.
     1                  The net input is:

           0.04         y_in = 0.04 – 0.14  1 + 0.44  1 = 0.34

x1 = –1   0.14  0   

                     
                         The new weights are:
                         b = 0.04 + 0.1 (-1 - 0.34) = –0.09
           0.44         w1 = 0.14 + 0.1 (-1 - 0.34) (-1) = 0.27

 x2 = 1                 w2 = 0.44 + 0.1 (-1 - 0.34) (1) = 0.31
                        The largest weight change is 0.13


## Slide 33

                          Fourth Training Run
                          Apply the fourth training set (–1, –1) with output –1.
     1                    The net input is:
                          y_in = –0.09 – 0.27  1 – 0.31  1 = –0.67
           –0.09          The new weights are:
x1 = –1   0.27  0        b = –0.09 + 0.1 (-1 + 0.67) = –0.27
           0.31           w1 = 0.27 + 0.1 (-1 + 0.67) (-1) = 0.43
x2 = –1                   w2 = 0.31 + 0.1 (1 + 0.67)(-1) = 0.47
                          The largest weight change is 0.16.

                      1
                               –0.27                        In this way, we update our network till
                     x1        0.43  0                     all the data in the truth table are
                                0.47                        satisfied. This may take hundreds of
                     x2                                     iterations to reach the desirable weight.


## Slide 34

 Problem in perceptron


x1   x2   Y
0    0    0
0    1    1                                   x2
1    0    1
1    1    0
                                   ( 0 ,1 )             ( 1 ,1 )

                                                                   x1
                                    ( 0 ,0 )
                                                   ( 1 ,0 )




              Can only perform for linearly separable dataset


## Slide 35

Multi-layer feed-forward neural network



                                   Activation function:
                                   Y(output) = 1 if y_in > 0
                                              0 if y_in <  0


## Slide 36

Back propagation
   Forward Pass
   Backward Pass


## Slide 37

 Step 1: Forward Propagation
   Let:
   Xi = Input to the network.
   Wij = Weight from input neuron i to hidden neuron j.
   Oj = Output of hidden neuron j.
   Wjk = Weight from hidden neuron j to output neuron k.
   Ok = Output of output neuron k.
   Tk = Target output.
   Ij = Net input to hidden neuron j, given by:


## Slide 38

Impact on Weight Updates
In gradient descent, we update weights in the opposite direction of the gradient:


## Slide 39

Back-propagation


## Slide 40

              Back-propagation For X-OR gate




x1   x2   Y                      Taking training set as X1 = X2 =1 and target as 0.
1    1    0
0    1    1
                                                                              b3
1    0    1                                    i                          j
0    0    0
                                                            w13                          b5
                                      1        1                          3
                                                      w14         w23              w35       k
                             0                                                           5
                                                                                   w45
                                      1        2            w24           4


                                                                          b4


## Slide 41

Recurrent neural network

 Memory

   We are all familiar with the song 《Twinkle twinkle》


   What is the 10th word?


   We learned them as a sequence, a kind of conditional memory.


   More example: driving steps, movie scenes, …


## Slide 42

PRACTICAL EXAMPLE




          SIMPLE NEURAL NETWORK




              IN RECURRENT FORM


## Slide 43

A BIT COMPLICATED ONE


## Slide 44

St = F (U  Xt + W  St-1)
Xt = current input
St-1 = previous state
U = weight to current input
W =weight of previous state(hidden state)

Ot = St V


## Slide 45

“Memory” in Neural Network


   Traditional Neural Network
        Output relies only on current input


        input -> hidden -> output
   Network with “Memory”

        Output relies on current input and history information are recurrent neural
         network


        (input + prev_hidden) -> hidden -> output


## Slide 46

Applications of RNN:
   i) Language modeling and generating text
  Given a sequence of words we want to predict the probability of each word
given the previous words.

   ii) Machine translation
  Machine translation is similar to language modeling in that our input is a
sequence of words in our source language (e.g. German). We want to output a
sequence of words in our target language (e.g. English).

  A key difference is that our output only starts after we have seen the complete
input, because the first word of our translated sentences may require information
captured from the complete input sequence.

   iii) Speech recognition
   Given an input sequence of acoustic signals from a sound wave, we can predict
a sequence of phonetic segments together with their probabilities.


## Slide 47

Hopfield Network
   In 1982, John Hopfield introduced an artificial neural network
    to collect and retrieve memory like the human brain. Here, a
    neuron is either on or off the situation. The state of a
    neuron(on +1 or off 0) will be restored, relying on the input it
    receives from the other neuron.
   A Hopfield network is at first prepared to store various patterns
    or memories. Afterward, it is ready to recognize any of the
    learned patterns by uncovering partial or even some corrupted
    data about that pattern, i.e., it eventually settles down and
    restores the closest pattern. Thus, similar to the human brain,
    the Hopfield model has stability in pattern recognition.
   A Hopfield network is a single-layered and recurrent network in
    which the neurons are entirely connected, i.e., each neuron is
    associated with other neurons. If there are two neurons i and j,
    then there is a connectivity weight wij lies between them which
    is symmetric wij = wji .
   With zero self-connectivity, Wii =0 is given below. Here, the
    given three neurons having values i = 1, 2, 3 with
    values Xi=±1 have connectivity weight Wij.


## Slide 48

kohonen Neural Network
   This network is also known as self-organizing map.

                                       w11               1
                           1                 w21
                                               w12
                                             w22         2

                           2                   w13
                                         w23


## Slide 49

    KNN
   Step 1: Initialization The first step is to initialize the SOM. You create a 2D grid of neurons, and each
    neuron is associated with a weight vector of the same dimension as the input features. These weight
    vectors are randomly initialized at the beginning.
   Step 2: The training process consists of presenting the input data to the SOM and adjusting the weights
    of the neurons to represent the input data. Here's how it works:
   Select a random input from the dataset.
   Compute the Euclidean distance between the input feature vector and the weight vectors of all neurons
    in the grid.
   Find the neuron with the smallest distance (also known as the "Best Matching Unit" or BMU).
   Update the weights of the BMU and its neighboring neurons to move them closer to the input's feature
    vector.
        The BMU's weights are updated the most, and the update decreases as you move away from the BMU on the grid.
        This process allows the SOM to adjust the grid in such a way that similar data are mapped close to each other.

   Step 3: Repeat
        Repeat the training process for a certain number of epochs or until the SOM reaches a desired level of
         convergence.

   Step 4: Visualization After training, you can visualize the SOM's grid to see how the data are organized
    based on their feature similarities. Each neuron on the grid represents a region of the feature space,
    and similar data should be located close to each other on the grid.


## Slide 50

      kohonen Neural Network
   Step 1: Initialization Initial weights for each neuron:                                        Length   Width
     Neuron 1: [0.5, 0.2]                                                                          0.8      0.4
     Neuron 2: [0.3, 0.7]                                                                          0.75     0.43
     Neuron 3: [0.9, 0.6]                                                                          0.82     0.44
     Neuron 4: [0.4, 0.3]                                                                          0.5      0.1
   Step 2: Training Take the first flower from the dataset: [PL = 0.8, PW = 0.4]
                                                                                                   0.45     0.11
   Compute the Euclidean distance between the input flower and the weight vectors
    of all neurons:                                                                                0.47     0.12
   Distance to Neuron 1: sqrt((0.8 - 0.5)^2 + (0.4 - 0.2)^2) ≈ 0.36                               0.8      0.41
   Distance to Neuron 2: sqrt((0.8 - 0.3)^2 + (0.4 - 0.7)^2) ≈ 0.58
   Distance to Neuron 3: sqrt((0.8 - 0.9)^2 + (0.4 - 0.6)^2) ≈ 0.223                              0.5
   Distance to Neuron 4: sqrt((0.8 - 0.4)^2 + (0.4 - 0.3)^2) ≈ 0.412                            0.2
   Find the Best Matching Unit (BMU):                                                            0.3
        The BMU is Neuron 3 because it has the smallest distance (0.223) to the input flower.   0.7
                                                                                                 0.9
                                                                                                 0.6
                                                                                                 0.4
                                                                                                  0.3


## Slide 51

KNN continued
   Let's define a learning rate (alpha) of 0.5.Now, let's calculate the neighborhood factor for
    each neuron using the Gaussian neighborhood function. The neighborhood factor (θ) is
    usually calculated using a neighborhood function that depends on the distance between the
    Best Matching Unit (BMU) and the other neurons in the grid. One commonly used
    neighborhood function is the Gaussian function. The Gaussian neighborhood function is
    defined as:
   θ = exp(-(d^2) / (2 * sigma^2))
   We'll use a neighborhood radius (sigma) of 1.0 for this example.


   For Neuron 1:
   Distance to BMU (d): sqrt((0.9 - 0.5)^2 + (0.6 - 0.2)^2) ≈ 0.5656
   Neighborhood factor (θ) with sigma = 1.0: exp(-(0.5656^2) / (2 * 1.0^2)) ≈ 0.852
   For Neuron 2:
   Distance to BMU (d): sqrt((0.9 - 0.3)^2 + (0.6 - 0.7)^2) ≈ 0.608
   Neighborhood factor (θ) with sigma = 1.0: exp(-(0.608^2) / (2 * 1.0^2)) ≈ 0.831
   For Neuron 4:
   Distance to BMU (d): sqrt((0.9 - 0.4)^2 + (0.6 - 0.3)^2) ≈ 0.583
   Neighborhood factor (θ) with sigma = 1.0: exp(-(0.583^2) / (2 * 1.0^2)) ≈ 0.843


## Slide 52

    KNN continued

   Update the weights of the BMU and its neighboring neurons:
   Learning rate (alpha) = 0.5 and Neighborhood radius (sigma) = 1.0
   Update Neuron 3: New Weight = Old Weight + alpha * (Input Flower - Old Weight)
                   New Weight = [0.9, 0.6] + 0.5 * ([0.8, 0.4] - [0.9, 0.6]) = [0.85, 0.5]
   Update Neuron 1: New Weight = Old Weight + alpha * neighborhood_factor * (Input Flower - Old Weight)
                   New Weight = [0.5, 0.2] + 0.5 * 0.852 * ([0.8, 0.4] - [0.5, 0.2]) = [0.6278, 0.2852].
   Update Neuron 2: New Weight = Old Weight + alpha * neighborhood_factor * (Input Flower - Old Weight)
                   New Weight = [0.3, 0.7] + 0.5 * 0.831 * ([0.8, 0.4] - [0.3, 0.7]) = [0.507, 0.575]
   Update Neuron 4: New Weight = Old Weight + alpha * neighborhood_factor * (Input Flower - Old Weight)
                   New Weight = [0.4, 0.3] + 0.5 * 0.843 * ([0.8, 0.4] - [0.4, 0.3]) = [0.568, 0.342]
   Step 3: Repeat the training process for all flowers in the dataset and for a certain number of epochs or
    until convergence.
   Step 4: Visualization After training, you can visualize the 2x2 grid of neurons and observe how the flowers
    are organized based on their feature similarities.


## Slide 53

    Expert system

An expert (human) is an individual who has a superior capability of understanding a problem.
For example: a doctor, financial advisor, an expert in car engines, etc.
Human had collected the information from expert and designed a machine which can perform
like that expert hence an expert system is a computer system whose performance is guided by
specific, expert knowledge in solving problems.


      Parameters                      Human Expert                   Expert System
      Time availability               Working day                    Any time
      Geographical                    specific location              Wherever
      Security                        Not replaceable                Can be replaced
      Perishable(go bad quickly)      Yes                            No
      Performance                     Variable                       Consistent
      Speed                           Variable                       Consistent and more fast


## Slide 54

  For a workable expert system, we need more than a set of rules.
We need mainly three components:
   User Interface
   Inference Engine
 Knowledge Base
 1. User Interface

   With the help of a user interface, the expert system interacts
with the user, takes queries as an input in a readable format, and
passes it to the inference engine. After getting the response from the
inference engine, it displays the output to the user. In other
words, it is an interface that helps a non-expert user to
communicate with the expert system to find a solution.


## Slide 55

 2. Inference Engine(Rules of Engine)
  The inference engine is known as the brain of the expert system as it is the main
   processing unit of the system. It applies inference rules to the knowledge base to
   derive a conclusion or deduce new information. It helps in deriving an error-free
   solution of queries asked by the user.
  With the help of an inference engine, the system extracts the knowledge from the
   knowledge base.
  There are two types of inference engine:
   Deterministic Inference engine: The conclusions drawn from this type of
    inference engine are assumed to be true. It is based on facts and rules.
   Probabilistic Inference engine: This type of inference engine contains
    uncertainty in conclusions, and based on the probability.
 Inference engine uses the below modes to derive the solutions:
   Forward Chaining: It starts from the known facts and rules, and applies the
    inference rules to add their conclusion to the known facts.
   Backward Chaining: It is a backward reasoning method that starts from the goal
    and works backward to prove the known facts.


## Slide 56

   3. Knowledge Base
   The knowledgebase is a type of storage that stores knowledge acquired from the
    different experts of the particular domain. It is considered as big storage of knowledge.
    The more the knowledge base, the more precise will be the Expert System.
   It is similar to a database that contains information and rules of a particular domain or
    subject.
   One can also view the knowledge base as collections of objects and their attributes.
    Such as a Lion is an object and its attributes are it is a mammal, it is not a domestic
    animal, etc.
   Components of Knowledge Base
   Factual Knowledge: The knowledge which is based on facts and accepted by
    knowledge engineers comes under factual knowledge.

•    Heuristic Knowledge: This knowledge is based on practice, the ability to guess,
     evaluation, and experiences.


## Slide 57

Steps in designing expert system


       i. Knowledge Acquisition:
       Knowledge acquisition is the first step or process where we define the rules and ontologies
    required for a knowledge-based system. It helps to describe the initial tasks associated with
    developing an expert system that include finding and interviewing domain experts and capturing
    their knowledge via rules, objects, and frame-based ontologies. The expert sources can be
    domain specialist, articles, journal, database etc.
       Sources of Knowledge
       Expert: It is primary source.
       End Users: They usually have a good overview of the problem domain and may provide
    valuable insight during initial investigations.
      Secondary/Tertiary Experts: They can provide specialized knowledge on sub-problem. Some
    time they may give rise to conflicting advice also.
       - Literature: This is another source which is taken from reports, guidelines, books, manuals
    etc. It provides background and insight in early stages.


## Slide 58

   ii. Knowledge representation
    Collected data and information about the world need to be represented in such a from
which will help a computer system to understand and later utilize it to solve complex task.
It is a set of ontological commitment. We can use declarative knowledge to represent the
acquired knowledge.
   iii. Knowledge inference
   It refers to acquiring new knowledge from existing facts based on certain rules and
constraints. Mostly rule based reasoning (Forward chaining/Backward chaining) is used for
inferencing.
   iv. Knowledge transfer

   Knowledge transfer is the practical problem of transferring knowledge from one part of
    the organization to another. Knowledge transfer seeks to organize, create, capture or
    distribute knowledge and ensure its availability for future users.


## Slide 59

    Participants in the development of Expert System
    There are three primary participants in the building of Expert System:
1.   Expert: The success of an ES much depends on the knowledge provided by human
     experts. These experts are those persons who are specialized in that specific domain.
2.   Knowledge Engineer: Knowledge engineer is the person who gathers the knowledge
     from the domain experts and then codifies that knowledge to the system according to
     the formalism.
3.   End-User: This is a particular person or a group of people who may not be experts, and
     working on the expert system needs the solution or advice for his queries, which are
     complex.


## Slide 60

       Advantages/ disadvantages of expert
       system

   Advantages of Expert System                 Disadvantages of Expert System
   These systems are highly reproducible.         The response of the expert system may get wrong if the
                                                    knowledge base contains the wrong information.
   They can be used for risky places where
    the human presence is not safe.                Like a human being, it cannot produce a creative output for
                                                    different scenarios.
   Error possibilities are less if the KB
    contains correct knowledge.                    Its maintenance and development costs are very high.
   The performance of these systems remains       Knowledge acquisition for designing is much difficult.
    steady as it is not affected by emotions,
    tension, or fatigue.                           For each domain, we require a specific ES, which is one of
                                                    the big limitations.
   They provide a very high speed to
    respond to a particular query.                 It cannot learn from itself and hence requires manual
                                                    updates.


## Slide 61

Applications
    Business
    Manufacturing
    Medicine
    Engineering
    Applied science
    Military
    Space
    Transportation
    Education
    Image analysis
    Chemical structure
    Agriculture

    Robotics and many more


## Slide 62

Natural language processing
   Language is the means for Communication for humans. By studying language, we can understand more about the
world.
   Components of NLP
   There are the following two components of NLP -
   1. Natural Language Understanding (NLU)
   Natural Language Understanding (NLU) helps the machine to understand and analyse human language by extracting
the metadata from content such as concepts, entities, keywords, emotion, relations, and semantic roles.
   NLU mainly used in Business applications to understand the customer's problem in both spoken and written language.
   NLU involves the following tasks -
   It is used to map the given input into useful representation.
   It is used to analyze different aspects of the language.
   2. Natural Language Generation (NLG)
   Natural Language Generation (NLG) acts as a translator that converts the computerized data into natural language
representation. It mainly involves Text planning, Sentence planning, and Text Realization.


## Slide 63

Steps in NLP




               Discourse Integration


## Slide 64

   i) Lexical or Morphological Analysis

   The lexicon of a language is its vocabulary that includes its words and expressions.

   Morphology is the identification, analysis and description of structure of words.

   The lexical analysis objective is to divide the text into paragraphs, sentences, words and
analyze the structure of words. The lexical analysis cannot be performed in isolation from
morphological and syntactic analysis.

   For eg board can mean board in which we write or board meeting.

   bat can be used as ‘a baseball thing’ and also ‘a flying mammal’.


                                                                                                          The red bird pecks the grain.
   ii) Syntactic Analysis

   Syntactic analysis takes an input sentence and produces a representation of its grammatical                          SP
structure.

   A grammar describes the valid parts of speech of a language and how to combine them into                    NP                    VP
phrases.

   A computer grammar specifies which sentences are in a language and their parse trees.               DET            N       V            NP
                                                                                                article – the         bird    pecks
   A parse tree is a hierarchical structure that shows how the grammar applies to the input.                   A.                    DET         N
   Each level of the tree corresponds to the application of one grammar rule.                                  red                   the        grain

   The sentences such as “the school goes to boy” is rejected by English syntactic analyzer.


## Slide 65

   Semantic Analysis

    Semantic analysis is a process of converting the syntactic representations into a meaningful representation. This analysis involves the
following tasks:

   • Word sense determination

   • Sentence level analysis

    Word sense:

   Words have different meanings in different contexts.

   E.g., Ram love fish. Here the meaning of love can be ‘like’ and also ‘eat’.

    Sentence Level Meaning

   Once the words are understood, the sentence must be assigned some meaning.

   E.g.,

   Ram ate hot ice-cream.

   I saw a man with a telescope.

   Semantic analyzer rejects this sentence as it states hot ice-cream would make no sense.


## Slide 66

   iv) Discourse integration
   The meaning of an individual sentence may depend on the sentences that precedes it and may influence
the meaning of the sentences that follow it.
   Example: the word “that” in the sentence,
   “You have done that.”
   depends on the prior discourse context.
   v) Pragmatic Analysis
  Pragmatics comprises aspects of meaning that depend upon the context or upon facts about real world.
These aspects include:
   • Logical inferences, that can be drawn from the meanings of a set of propositions.
   • Discourse structure: the meaning of a collection of sentences taken together.
   E.g.,
   Jack fell. Jill brought him a band-aid.
   Jack got hurt and Jill wanted to help.
   We got seven letters today.


## Slide 67

 NlP problems
   1. The same expression means different things in      5. Problem due to syntactic
different context.
                                                          the school goes to boy
     Where’s the water? (Chemistry lab? Must be pure)
                                                          6. Problem due to extensive use of pronouns. (semantic issue)
     Where’s the water? (Thirsty? Must be drinking
water)                                                         • E.g., Ravi went to the supermarket. He found his favorite brand of
    2. No natural language program can be complete            coffee in rack. He paid for it and left.
because of new words, expression, and meaning can be           • It denotes??
generated quite freely
                                                          7. Use of grammatically incorrect sentence
     I’ll fax it to you
                                                          • He rice eats. (syntax issue)
   3. There are lots of ways to say the same thing.
     Ram was born on October 11.                        8. Use of conjunctions to avoid repetition of phrases cause problem in
                                                          NLP
     Ram’s birthday is October 11.
                                                          • E.g., Ram and hari went to restaurant. Ram had a cup of coffee while
   4. Sentence and phrases might have hidden meanings
                                                          hari had tea.
    • Out of sight, out of mind means invisible, idiot
respectively.


## Slide 68

         NLP application
   1. Question Answering
                                                                                       5. Spelling correction
    Question Answering focuses on building systems that automatically answer
the questions asked by humans in a natural language.                              Microsoft Corporation provides word processor software like MS-word,
                                                                                  PowerPoint for the spelling correction.
    2. Spam Detection
    Spam detection is used to detect unwanted e-mails getting to a user's inbox. 6. Speech Recognition

   3. Sentiment Analysis                                                                 Speech recognition is used for converting spoken words into text. It is used
                                                                                          in applications, such as mobile, home automation, video recovery, dictating
     Sentiment Analysis is also known as opinion mining. It is used on the web to
analyze the attitude, behavior, and emotional state of the sender. This application to Microsoft Word, voice biometrics, voice user interface, and so on.
is implemented through a combination of NLP (Natural Language Processing) and 7. Chatbot
statistics by assigning the values to the text (positive, negative, or natural), identify
the mood of the context (happy, sad, angry, etc.)                                         Implementing the Chatbot is one of the important applications of NLP. It is
                                                                                         used by many companies to provide the customer's chat services.
     4. Machine Translation
   Machine translation is used to translate text or speech from one natural
language to another natural language.

   Example: Google Translator


## Slide 69

Pattern recognition
               Physical Envrironment                   Training data


               Data acquistion saving
                                                       Pre–processing

     Data         Pre–processing          Feature
  perception                             Extraction
                                                      Feature Extraction
                                                          selection
                 Feature Extraction


                      Features                            Features


                   Classification       Model          Classification


                  Post–processing


                     Decision


## Slide 70

Data acquisition
In a typical pattern recognition application, the raw data is processed and converted into a form that is
amenable for a machine to use.
Pattern recognition involves classification and cluster of patterns.
In classification, an appropriate class label is assigned to a pattern based on an abstraction that is generated
using a set of training patterns or domain knowledge. Classification is used in supervised learning.
Clustering generates a partition of the data which helps decision making for activity of interest to us. Clustering
is used in an unsupervised learning.
Feature extraction
A feature is a function of one or more measurements, computed so that it quantifies some significant
characteristics of the object.
Example: consider our face then eyes, ears, nose etc are features of the face.
A set of features that are taken together, forms the features vector.
Example: In the above example of face, if all the features (eyes, ears, nose etc) taken together then the sequence
is feature vector ([eyes, ears, nose]). Feature vector is the sequence of a features represented as a d-dimensional
column vector.
Pattern recognition possesses the following features:
- Pattern recognition system should recognize familiar pattern quickly and accurate
- Recognize and classify unfamiliar objects
- Identify patterns and objects even when partly hidden


## Slide 71

Training and learning in pattern recognition
•   Learning is a phenomenon through which a system gets trained and becomes adaptable to
    give result in an accurate manner.
•   Entire dataset is divided into two categories, training the model and testing the model after
    training
•    Training set is used to build a model. It consists of the set of images which are used to
    train the system. Training rules and algorithms used give relevant information on how to
    associate input data with output decision. The system is trained by applying these
    algorithms on the dataset, all the relevant information is extracted from the data and results
    are obtained. Generally, 70-80% of the data of the dataset is taken for training data.
•   Testing data is used to test the system. It is the set of data which is used to verify whether
    the system is producing the correct output after being trained or not. Generally, 30% of the
    data of the dataset is used for testing. Testing data is used to measure the accuracy of the
    system. Example: a system which identifies which category a particular flower belongs to,
    is able to identify seven categories of flowers correctly out of ten and rest others wrong,
    then the accuracy is 70 %.


## Slide 72

Real-time examples and explanations:
While talking about various types of balls, then a description of a ball is a pattern. In
the case balls considered as pattern, the classes could be football, cricket ball, table tennis
ball etc. Given a new pattern, the class of the pattern is to be determined.
The choice of attributes and representation of patterns is a very important step in
pattern classification.
An obvious representation of a pattern will be a vector. Each element of the vector can
represent one attribute of the pattern. The first element of the vector will contain the
value of the first attribute for the pattern being considered.
Example: While representing spherical objects, (25, 1) may be represented as a
spherical object with 25 units of weight and 1 unit of diameter. The class label can form a
part of the vector. If spherical objects belong to class 1, the vector would be (25, 1, 1),
where the first element represents the weight of the object, the second element, the
diameter of the object and the third element represents the class of the object.


## Slide 73

Advantages/ Disadvantages of PR

Advantages
- Pattern recognition solves classification problems
- Pattern recognition solves the problem of fake bio-metric
detection.
- It is useful for cloth pattern recognition for visually
impaired blind people.
 Disadvantages:
- Syntactic Pattern recognition approach is complex to
implement and it is very slow process.
- Sometime to get better accuracy, larger dataset is required.


## Slide 74

      Applications of PR
i) Image processing, segmentation and analysis
Pattern   recognition is used to give human recognition intelligence to machine which is required in image
processing.
ii) Computer vision
Pattern recognition is used to extract meaningful features from given image/video samples and is used in computer
vision for various applications like biological and biomedical imaging.
iii) Speech recognition
The greatest success in speech recognition has been obtained using pattern recognition paradigms. It is used in
various algorithms of speech recognition which tries to avoid the problems of using a phoneme level of description
and treats larger units such as words as pattern.
iv) Finger print identification
The fingerprint recognition technique is a dominant technology in the biometric market. A number of recognition
methods have been used to perform fingerprint matching out of which pattern recognition approaches is widely used.



## Slide 75


     Machine Vision
   Machine vision is the ability of a computer to see with one or more digital cameras and
performing analog to digital conversion (ADC) and digital signal processing (DSP). The resulting
data will be passed onto a computer or a robot controller.
   Why are we imparting our primary sense to machines? For machines to relate to human mind
they should also perceive the visual world like us. This can be in the form of a small camera
which helps the machine to see and understand the world around them. Machine vision is a
mushrooming branch of AI that aims to give machine a sense of vision similar to that of humans.
Integrating specialized neural network to machine helps them to identify and understand images
from the real world.
   The basic image classification is easier for machines but it challenges them to extract meaning
or information from abstract images. A common example to understand the difference between
machine vision and human vision is comparing flight of plane and that of bird. Both will depend
on principle of physics which help them to lift to air but that doesn’t mean that plane would flap
its wings to fly.


## Slide 76

Machine Vision


## Slide 77

Machine Vision Applications

  - Robotics

  - Medicine

  - Remote Sensing

  - Meteorology


## Slide 78

Thank You


## Slide 79

Best of Luck


## Slide 80

Types of erros




                 Least square for variable and Fixed cost




                 Least square regression line
