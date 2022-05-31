import './Sidebar.css';

function Sidebar(props) {
  return (
    <aside id='sidebar'>
      <h3 className='text-uppercase'>Categories</h3>
      <ul className='sidebar-categories'>
        
        {
          props.CategoryData.map((voucher) => 
          <li className='form-check' key={props.CategoryData.indexOf(voucher)}>
          <input className="form-check-input" type="checkbox" value={props.CategoryData.indexOf(voucher)} id={`category-${props.CategoryData.indexOf(voucher)}`} onClick={() => props.Action(voucher)} />
          <label className="form-check-label text-capitalize" htmlFor={`category-${props.CategoryData.indexOf(voucher)}`}>{voucher}</label>
        </li>
          )
        }

      </ul>
    </aside>
  );
}

export default Sidebar;
