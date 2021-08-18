import React from 'react';
import TreeNode from '../TreeNode/TreeNode';

const Tree = ({tData = []}) => {
    return (
        <div className="tc">
            {
                tData.map((node, index) => {
                    return(
                            <TreeNode key={index} node = {node} />                        
                    );
                })
            }
        </div>
    );
}

export default Tree;

