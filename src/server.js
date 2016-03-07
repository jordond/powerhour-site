import path from 'path';
import http from 'http';

import Express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';
import PrettyError from 'pretty-error';

const pretty = new PrettyError();
const app = new Express();