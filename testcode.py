import pandas as pd
df = pd.read_csv ('data\creditcard_data.csv')
df.to_json (r'C:/Users/ASUS/Downloads/creditcard_data.json')