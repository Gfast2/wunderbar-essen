# Menu Structure

## Table: menu

| name   |     type      |  description | example |
|--------|:-------------:|:------------|:--------|
| number |  string | human readable menu number | 65, H3, 44A |
| name_chinese | string | menu chinese name | 酥炸鸡 |
| name_german | string | menu german name | Hänchenbrust Kross |
| price | string | menu price in Euro | 4.90 |
| type | string | to which category the menu belong to （German+Chinese） | Gemüse 蔬菜 / Lamm 羊 |
| description | string | explain what's inside/how it served/quantity etc | Gebacken auf gebratenem Gemüse scharf oder nicht scharf |
| unit | string | normally for the drinks | 0.3L / 0.75L Flasche / Tasse |
| allergen | string | including material can cause which allergen | 1, 2 (And in a separate table I define what are these number representing 1-Ei) |
| additive | string | additive included | 1 (And in a separate table I define what are these number representing 1-Konservierungsstoffe) |

## Table: allergen

| name   |     type      |  description | example |
|--------|:-------------:|:------------|:--------|
| id | number | used to mapped the allergen type to table menu | 1 |
| name_chinese | string | allergen source chinese name | 鸡蛋 |
| name_german | string | allergen source german name | Ei |

## Table: additive

| name   |     type      |  description | example |
|--------|:-------------:|:------------|:--------|
| id | number | used to mapped the additive type to table menu | 1 |
| name_chinese | string | additive chinese name | 防腐剂 |
| name_german | string | additive source german name | Konservierungsstoffe |