from flask import Flask,request,jsonify
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
import json


app = Flask(__name__)

target = 'Class'
predictors = ['Time', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10',\
       'V11', 'V12', 'V13', 'V14', 'V15', 'V16', 'V17', 'V18', 'V19',\
       'V20', 'V21', 'V22', 'V23', 'V24', 'V25', 'V26', 'V27', 'V28',\
       'Amount']


@app.route('/json', methods=['POST'])
def process_json():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        print(json.dumps(request.data),"==================")
        # data_df1 = pd.DataFrame(request.data)

        # dtest1 = xgb.DMatrix(data_df1[predictors], data_df1[target].values)

        # with open('xgboost_pickelmodel','rb') as f:
        #     model=pickle.load(f)

        # preds1 = model.predict(dtest1)
        # print(preds1)
        return "preds1"
    else:
        return 'Content-Type not supported!'

if __name__ == '__main__':
    app.run()
