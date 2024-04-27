import os
import json
import csv
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins='*')

def read_file(file_path):
    results=[]
    with open(file_path,'r',encoding='utf-8') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            results.append(row)
    
    json_data=json.dumps(results)
    return json.loads(json_data)

def read_folder(folder_path):
    results = []
    for file_name in os.listdir(folder_path):
        data = read_file(folder_path+"/"+file_name)
        results.append({
            'place': file_name.replace('.csv', ''),
            'data': data
        })
    
    return json.loads(json.dumps(results))

@app.route('/data/sun')
def get_sun_data():
    data = read_file('./data/sun/2023.csv')
    for item in data:
        item['YYYY-MM-DD'] = item.pop('﻿YYYY-MM-DD')
    return data

@app.route('/data/uvRay')
def get_uv_ray_data():
    data = read_file('./data/UVRay/2023.csv')
    for item in data:
        item['Year'] = item.pop('﻿Year')
    return data

@app.route('/data/humidity')
def get_humidity_data():
    data = read_folder('./data/humidity')
    for obj in data:
        for item in obj['data']:
            item['年/Year'] = item.pop('﻿年/Year')
    return data

@app.route('/data/rainfall')
def get_rainfall_data():
    data = read_folder('./data/rainfall')
    for obj in data:
        for item in obj['data']:
            item['年/Year'] = item.pop('﻿年/Year')
    return data

@app.route('/data/wind')
def get_wind_data():
    data = read_folder('./data/wind')
    for obj in data:
        for item in obj['data']:
            item['年/Year'] = item.pop('﻿年/Year')
    return data

if __name__ == '__main__':
    app.run(port=8088)