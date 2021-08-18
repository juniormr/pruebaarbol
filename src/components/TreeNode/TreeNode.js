import React from 'react';
import Tree from '../Tree/Tree';

const TreeNode = ({node}) => {
    const hasChild = node.childNodes ? true : false;
    
    return (
        <div className="ba b--light-gray">
            {
                hasChild && (
                    <div  className="flex items-center " >
                        <p className="bl bb .br1 pa1 ml2 mr2 ">{node.Name}</p>
                        <Tree tData= {node.childNodes} />
                    </div>
                )             
            }
        </div>
    )
}

export default TreeNode;
