
import React from 'react';
import { Link } from 'react-router-dom';

function ListItem({ item, onDelete, onDone }) {
    return (<div style={{ backgroundColor: item.get('colors'), opacity: item.get('deleting') ? 0.3 : 1 }}>
        <div style={{ width: '200px', display: 'inline-block' }}>{item.get('value')}</div>
        <div style={{ width: '50px', display: 'inline' }}>{item.get('priority')}</div>
        <input type="checkbox" defaultChecked={item.get('done') === true} onChange={e => onDone(!item.get('done'))} />
        {item.get('deleting') === false ? (
            <div style={{ display: 'inline' }}>
                <Link to={"/todo/" + item.get('id')}>Show</Link>
                <button onClick={onDelete}>Delete</button>
            </div>) : null}
    </div>);
}

export default ListItem;