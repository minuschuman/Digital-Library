import { Breadcrumb } from "react-bootstrap";
import ensureArray from 'ensure-array';

export default function renderBreadcrumbs(props) {
  var selected = props.url;
  const pageTitle = {
    'dashboard': 'Home',
    'user': ['Student'],
    'user/add': ['Student', 'Add'],
    'user/edit': ['Student', 'Edit'],
    'book': "Book",
    'book/add': ['Book', 'Add'],
    'book/edit': ['Book', 'Edit'],
  };
  var list = ensureArray(pageTitle[selected]);
  return (
    (list.length > 0) ? (
      <Breadcrumb>
        {list.map((item, index) => (
          <Breadcrumb.Item
            active={index === list.length - 1}
            key={`${selected}_${index}`}
          >
            {item}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    ) : ('')
  );
}
