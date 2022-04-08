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
from flask_cors import CORS, cross_origin


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
import threading
import json




app = Flask(__name__)

target = 'Class'
predictors = ['Time', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10',
       'V11', 'V12', 'V13', 'V14', 'V15', 'V16', 'V17', 'V18', 'V19',
       'V20', 'V21', 'V22', 'V23', 'V24', 'V25', 'V26', 'V27', 'V28',
       'Amount']

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/xgboost', methods=['POST'])
@cross_origin()

def process_json():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        content = request.get_json()
        data_df1 = pd.DataFrame(content)

        dtest1 = xgb.DMatrix(data_df1[predictors], data_df1[target].values)

        with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/xgboost_pickelmodel','rb') as f:
            model=pickle.load(f)

        preds1 = model.predict(dtest1)

        return str(preds1[0])
    else:
        return 500
        
@app.route('/AdaBoost', methods=['POST'])
@cross_origin()

def process_ada():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        content = request.get_json()
        data_df1 = pd.DataFrame(content)
        with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/AdaBoostClassifier_pickelmodel','rb') as f:
            model=pickle.load(f)
        preds1 = model.predict(data_df1)
        return str(preds1[0])
    else:
        return 500

@app.route('/RandomForest', methods=['POST'])
@cross_origin()

def process_RandomForest():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        content = request.get_json()
        data_df1 = pd.DataFrame(content)
        with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/RandomForestClassifier_pickelmodel','rb') as f:
            model=pickle.load(f)
        preds1 = model.predict(data_df1)
        return str(preds1[0])
    else:
        return 500

@app.route('/CatBoostClassifier', methods=['POST'])
@cross_origin()

def process_CatBoostClassifier():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        content = request.get_json()
        data_df1 = pd.DataFrame(content)
        with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/CatBoostClassifier_pickelmodel','rb') as f:
            model=pickle.load(f)
        preds1 = model.predict(data_df1)
        return str(preds1[0])
    else:
        return 500

@app.route('/LightGBM', methods=['POST'])
@cross_origin()

def process_LightGBM():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        content = request.get_json()
        data_df1 = pd.DataFrame(content)
        with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/LightGBM_pickelmodel','rb') as f:
            model=pickle.load(f)
        preds1 = model.predict(data_df1)
        return str(preds1[0])
    else:
        return 500


@app.route('/AllModels', methods=['POST'])
@cross_origin()

def process_AllModels():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        content_sample = request.get_json()
        content = request.get_json()          
        data_df1 = pd.DataFrame(content)
        ResultDish={}
        def AdaBoost(data):
            with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/CatBoostClassifier_pickelmodel','rb') as f:
                    model=pickle.load(f)
                    preds1 = model.predict(data)
                    print("AdaBoost :- ",preds1)
                    ResultDish["AdaBoost"] = str(preds1*100)
        def RandomForest(data):
                with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/RandomForestClassifier_pickelmodel','rb') as f:
                        model=pickle.load(f)
                        preds1 = model.predict(data)
                        print("RandomForest :- ",preds1)
                        ResultDish["RandomForest"] = str(preds1*100)

        def CatBoost(data):
                with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/CatBoostClassifier_pickelmodel','rb') as f:
                        model=pickle.load(f)
                        preds1 = model.predict(data)
                        print("CatBoost :- ",preds1)
                        ResultDish["CatBoost"] = str(preds1*100)
    
        def LightGBM(data):
                with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/LightGBM_pickelmodel','rb') as f:
                        model=pickle.load(f)
                        preds1 = model.predict(data)
                        print("LightGBM :- ",preds1)
                        ResultDish["LightGBM"] = str(preds1*100)
        # def xgbBoost(content2):
        #         data_df1 = pd.DataFrame(content2)
        #         print(content2)
        #         # dtest1 = xgb.DMatrix(data_df1[predictors], data_df1[target].values)

        #         # with open('C:/Users/ASUS/Desktop/final project/Project/Credit-Card-Fraud-Detection-Realtime/Credit-card-fraud-detection-real-time/Server/models/xgboost_pickelmodel','rb') as f:
        #         #     model=pickle.load(f)
        #         #     preds1 = model.predict(dtest1)
        #         #     print("xgbBoost :- ",preds1)
        #         #     ResultDish["xgbBoost"] = str(preds1)

        t1 = threading.Thread(target=AdaBoost(data_df1), name='t1')
        t2 = threading.Thread(target=RandomForest(data_df1), name='t2')
        t3 = threading.Thread(target=CatBoost(data_df1), name='t3')
        t4 = threading.Thread(target=LightGBM(data_df1), name='t4')
        # t5 = threading.Thread(target=xgbBoost(content_sample), name='t5')
        t1.start()
        t2.start()
        t3.start()
        t4.start()
        # t5.start()
        t1.join()
        t2.join()
        t3.join()
        t4.join()
        # t5.join()
        return str(ResultDish)
    else:
        return 500


@app.route('/test', methods=['POST'])
@cross_origin()

def process_test():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        content = request.get_json()
        return str(content[0].pop("Class"))
    else:
        return 500

if __name__ == '__main__':
    app.run()
