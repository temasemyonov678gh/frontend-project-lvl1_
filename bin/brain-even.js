#!/usr/bin/env node
import brainEven from '../src/even.js';

import greetingUser from '../src/cli.js';

const name = greetingUser();

brainEven(name);
