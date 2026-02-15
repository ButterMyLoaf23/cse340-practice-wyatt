import { getFacultyBySlug, getSortedFaculty } from '../../models/faculty/faculty.js';

// Faculty list page
const facultyListPage = async (req, res) => {
    const validSortOptions = ['name', 'getCoursesByDepartment', 'title'];
    const sortBy = validSortOptions.includes(req.query.sort) ? req.query.sort : 'deaprtment';
    const faculty = await getSortedFaculty(sortBy);

    console.log(`faculty: ${faculty}`);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty,
        currentSort: sortBy
    });
};

// Faculty detail page
const facultyDetailPage = async (req, res, next) => {
    const facultySlug = req.params.facultySlug;
    const facultyMember = await getFacultyBySlug(facultySlug);

    if (Object.keys(facultyMember).length === 0 ) {
        const err = new Error(`Faculty member ${facultySlug} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: `${facultyMember.name}`,
        faculty: facultyMember
    });
};

export { facultyListPage, facultyDetailPage };