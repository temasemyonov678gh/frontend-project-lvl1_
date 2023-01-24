#!/usr/bin/env node
import brainCalc from '../src/calc.js';

import greetingUser from '../src/cli.js';

const name = greetingUser();

brainCalc(name);
