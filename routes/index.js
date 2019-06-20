import express from 'express'
import { handleRoot } from '../controller/reactController'

const router = express.Router();

router.get('/', async (_req, res) => handleRoot(_req, res));

module.exports = router;
