import pandas as pd

data = {
    "name": [
        "Resistor","Capacitor","Resistor","Transistor","Resistor",
        "Inductor","Resistor","Capacitor","Resistor","Diode",
        "Resistor","LED","Resistor","Transistor","Resistor",
        "Capacitor","Resistor","Inductor","Resistor","Diode"
    ],
    "value": [
        220,10,330,5,100,
        50,470,22,150,1,
        680,2,390,8,560,
        33,270,75,120,3
    ]
}

df = pd.DataFrame(data)
print(df)