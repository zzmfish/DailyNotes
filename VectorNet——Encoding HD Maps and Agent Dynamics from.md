---
tags: 人工智能
---



## <center>Introduction</center>

* Observed agent trajectories and map features are represented as sequence of <hu>vector</hu>s.
* Vectors are passed to a local GNN to obtain polyline-level features.
* Features are passed to a FCG to model the higher-order interaction.

## <center> Related work</center>

#### Behavior prediction for autonomous driving

* <hu>IntentNet</hu> proposes to jointly detect vehicles and predict their trajectories from LiDAR points and rendered HD maps.
*   Hong assumes that vehicle detections are provided and focuses on behavior prediction by encoding entity interactions with <hu>ConvNet</hu>s.
*  <hu>MultiPath</hu> uses ConvNets as encoder, but adopts pre-defined trajectory anchors to regress multiple possible future trajectories.
* <hu>PRECOG</hu> attempts to capture the future stochasiticity by flow-based generative models. 

#### Forecasting multi-agent interactions

* <hu>Social LSTM</hu> modelsthe trajectories of individual agents as separate LSTM networks, and aggregates the LSTM hidden states based on spatial proximity of the agents to model their interactions.
* <hu>Social GAN</hu> simplifies the interaction module and proposes an adversarial discriminator to predict diverse futures.
* Sun combines graph networks with variational <hu>RNN</hu>s to model diverse interactions.
* <hu>Graph Attention Networks</hu> apply self-attention mechanism to weight the edges in a predefined graph.

#### Representation learning for sets of entities

* Qi propose the <hu>PointNet</hu> model and PointNet++ to apply permutation invariant operations (e.g. max pooling) on learned point embeddings.

#### Self-supervised context modeling

* Many works in the NLP domain have proposed modeling language context in a self-supervised fashion. Their learned representations achieve significant performance improvement when transferred to downstream tasks.

## <center>VectorNet approach</center>

####  Representing trajectories and maps

* <hu>normalize</hu> the coordinates of all vectors to be centered around the location of target agent at its last observed time step

####  Constructing the polyline subgraphs

* construct <hu>sub-graphs</hu> at the vector level, where all vector nodes belonging to the same polyline are connected with each other
* a MLP's weights are shared over all nodes
* the MLP contains:
  * a single fully connected layer
  * layer normalization
  * ReLU non-linearity

####  Global graph for high-order interactions

* an MLP as the decoder function
* single GNN layer
* auxiliary graph completion
  * randomly mask out the featuresfor a subset of polyline nodes during training time

####  Overall framework

* training objective
  * negative Gaussian log-likelihood forthe groundtruth future trajectories
  * Huber loss between predicted node features and groundtruth maskednode features

## <center>Experiments</center>

#### Datasets

###### Argoverse motion forecasting

###### In-house dataset

#### Metrics

#### Baseline with rasterized images

#### VectorNet with vectorized representations



[原文](https://openaccess.thecvf.com/content_CVPR_2020/papers/Gao_VectorNet_Encoding_HD_Maps_and_Agent_Dynamics_From_Vectorized_Representation_CVPR_2020_paper.pdf)