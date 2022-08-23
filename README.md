[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

# Generate Unique 🛠

"Generate Unique" helps you to create unique passwords and ids as you want.

## Installation 🚀

```
yarn add generate-unique
```

Or

```
npm i generate-unique
```

## Properties ✨

| Name              | Required | Type    | Description                                       |
| ----------------- | -------- | ------- | ------------------------------------------------- |
| maxLength         | true     | Number  | Character length of the string you want to create |
| hasNumber         | false    | Boolean | String contain numbers                            |
| hasSpecial        | false    | Boolean | String contain special character                  |
| hasUpperCharacter | false    | Boolean | String contain upper case character               |
| hasLowerCharacter | false    | Boolean | String contain lower case character               |

## Usage 🔥

```
import {generateUnique} from 'generate-unique);
```

And

```
<p>
{generateUnique(12,true,true,true,true)}
</p>

example result: N$>BTfWE1R82
```

```
<p>
{generateUnique(12,true,true,true)}
</p>

example result: 39OA0$/#I<03
```

```
<p>
{generateUnique(12,true,true)}
</p>

example result: 46!0@#22$#**
```

```
<p>
{generateUnique(12,true)}
</p>

example result: 628829015038
```

```
<p>
{generateUnique(12)}
</p>

example result: this example return empty string because We did not specify what it should contain
```
