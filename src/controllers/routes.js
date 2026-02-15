import { Router } from 'express';
import { addDemoHeaders } from '../middleware/demo/headers.js';
import { catalogPage, courseDetailPage } from './catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js';
import { facultyListPage, facultyDetailPage } from './faculty/faculty.js';

const router = Router();

router.use('/catalog', (req, res, next) => {
    res.addStyle('<link rel="stylesheet" href="/css/catalog.css>');
    next();
})


router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/catalog', catalogPage);
router.get('/catalog/:courseSlug', courseDetailPage);
router.get('/demo', addDemoHeaders, demoPage);
router.get('/test-error', testErrorPage);
router.get('/faculty', facultyListPage);
router.get('/faculty/:facultySlug', facultyDetailPage);


export default router;