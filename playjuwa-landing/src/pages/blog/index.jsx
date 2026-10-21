// Route entry for the Blog page. Its stylesheet is injected while the page is mounted
// and removed on leave, so page CSS never leaks into other pages.
import Page from './BlogPage.jsx';
import css from './page.css?inline';
import { withPageStyles } from '../../lib/withPageStyles.jsx';

export default withPageStyles(Page, css, 'blog');
