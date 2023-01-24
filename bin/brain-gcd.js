#!/usr/bin/env node
import brainGcd from '../src/gcd.js';

import greetingUser from '../src/cli.js';

const name = greetingUser();

brainGcd(name);
