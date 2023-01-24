#!/usr/bin/env node
import brainProg from '../src/prime.js';

import greetingUser from '../src/cli.js';

const name = greetingUser();

brainProg(name);
