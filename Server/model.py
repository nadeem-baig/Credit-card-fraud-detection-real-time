import pandas as pd 
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.graph_objs as go
import plotly.figure_factory as ff
from plotly import tools
from plotly.offline import download_plotlyjs, init_notebook_mode, plot, iplot


import gc
from datetime import datetime 
from sklearn.model_selection import train_test_split
from sklearn.model_selection import KFold
from sklearn.metrics import roc_auc_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import AdaBoostClassifier
from catboost import CatBoostClassifier
from sklearn import svm
import lightgbm as lgb
from lightgbm import LGBMClassifier
import xgboost as xgb
import pickle



RFC_METRIC = 'gini'  
NUM_ESTIMATORS = 100 
NO_JOBS = 4 


#TRAIN/VALIDATION/TEST SPLIT
VALID_SIZE = 0.20 # simple validation using train_test_split
TEST_SIZE = 0.20 # test size using_train_test_split

#CROSS-VALIDATION
NUMBER_KFOLDS = 5



RANDOM_STATE = 2018

MAX_ROUNDS = 1000 
EARLY_STOP = 50  
OPT_ROUNDS = 1000  
VERBOSE_EVAL = 50 

IS_LOCAL = False

# data_df = pd.read_csv('Server\creditcard_data.csv')
# temp = data_df["Class"].value_counts()
# df = pd.DataFrame({'Class': temp.index,'values': temp.values})

# trace = go.Bar(
#     x = df['Class'],y = df['values'],
#     name="Credit Card Fraud Class - data unbalance (Not fraud = 0, Fraud = 1)",
#     marker=dict(color="Red"),
#     text=df['values']
# )
# data = [trace]
# layout = dict(title = 'Credit Card Fraud Class - data unbalance (Not fraud = 0, Fraud = 1)',
#           xaxis = dict(title = 'Class', showticklabels=True), 
#           yaxis = dict(title = 'Number of transactions'),
#           hovermode = 'closest',width=600
#          )
# fig = dict(data=data, layout=layout)

# fraud = data_df.loc[data_df['Class'] == 1]

# trace = go.Scatter(
#     x = fraud['Time'],y = fraud['Amount'],
#     name="Amount",
#      marker=dict(
#                 color='rgb(238,23,11)',
#                 line=dict(
#                     color='red',
#                     width=1),
#                 opacity=0.5,
#             ),
#     text= fraud['Amount'],
#     mode = "markers"
# )
# data = [trace]
# layout = dict(title = 'Amount of fraudulent transactions',
#           xaxis = dict(title = 'Time [s]', showticklabels=True), 
#           yaxis = dict(title = 'Amount'),
#           hovermode='closest'
#          )
# fig = dict(data=data, layout=layout)

target = 'Class'
predictors = ['Time', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10',\
       'V11', 'V12', 'V13', 'V14', 'V15', 'V16', 'V17', 'V18', 'V19',\
       'V20', 'V21', 'V22', 'V23', 'V24', 'V25', 'V26', 'V27', 'V28',\
       'Amount']

# train_df, test_df = train_test_split(data_df, test_size=TEST_SIZE, random_state=RANDOM_STATE, shuffle=True )
# train_df, valid_df = train_test_split(train_df, test_size=VALID_SIZE, random_state=RANDOM_STATE, shuffle=True )


# dtrain = xgb.DMatrix(train_df[predictors], train_df[target].values)
# dvalid = xgb.DMatrix(valid_df[predictors], valid_df[target].values)
# dtest = xgb.DMatrix(test_df[predictors], test_df[target].values)

# watchlist = [(dtrain, 'train'), (dvalid, 'valid')]

# params = {}
# params['objective'] = 'binary:logistic'
# params['eta'] = 0.039
# params['silent'] = True
# params['max_depth'] = 2
# params['subsample'] = 0.8
# params['colsample_bytree'] = 0.9
# params['eval_metric'] = 'auc'
# params['random_state'] = RANDOM_STATE
# model = xgb.train(params, 
#                 dtrain, 
#                 MAX_ROUNDS, 
#                 watchlist, 
#                 early_stopping_rounds=EARLY_STOP, 
#                 maximize=True, 
#                 verbose_eval=VERBOSE_EVAL)


# with open('xgboost_pickelmodel','wb') as f:
#     pickle.dump(model,f)
#     print("model saved")
# preds = model.predict(dtest)
# result =  roc_auc_score(test_df[target].values, preds)


# data_df1 = pd.read_csv('Server\Sample_dataset.csv')

# Initialize data to lists.
data = [{"Time":0, "V1":-1.359807134, "V2":-0.072781173, "V3":2.536346738, "V4":1.378155224, "V5":-0.33832077, "V6":0.462387778, "V7":0.239598554, "V8":0.098697901, "V9":0.36378697, "V10":0.090794172, "V11":-0.551599533, "V12":-0.617800856, "V13":-0.991389847, "V14":-0.311169354, "V15":1.468176972, "V16":-0.470400525, "V17":0.207971242, "V18":0.02579058, "V19":0.40399296, "V20":0.251412098, "V21":-0.018306778, "V22":0.277837576, "V23":-0.11047391, "V24":0.066928075, "V25":0.128539358, "V26":-0.189114844, "V27":0.133558377, "V28":-0.021053053, "Amount":149.62, "Class":0}]
 
# Creates DataFrame.
data_df1 = pd.DataFrame(data)

dtest1 = xgb.DMatrix(data_df1[predictors], data_df1[target].values)

with open('xgboost_pickelmodel','rb') as f:
    model=pickle.load(f)


preds1 = model.predict(dtest1)
print(preds1,"===========")

# print(data_df1)
