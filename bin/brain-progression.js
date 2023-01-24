#!/usr/bin/env node
import brainProg from '../src/progression.js';

import greetingUser from '../src/cli.js';

const name = greetingUser();

brainProg(name);
