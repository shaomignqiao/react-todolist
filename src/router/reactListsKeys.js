//React 列表 & Keys
import React from 'react';

function ListItem(props) {
  // 对啦！这里不需要指定key:
  return <li>{props.value}</li>;
}


function NumberList(props) {
  const numbers = props.numbers;//声明在外面是因为 {} 中不能出现var,const,let等这种关键字
  /*如果列表可以重新排序，我们不建议使用索引来进行排序，因为这会导致渲染变得很慢。*/
  const listItems = numbers.map((number,index) =>
    // 又对啦！key应该在数组的上下文中被指定  元素的 key 在他的兄弟元素之间应该唯一
    //key 会作为给 React 的提示，但不会传递给你的组件。如果您的组件中需要使用和 key 相同的值，请将其作为属性传递：
    //Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。
    //一个元素的key最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用来自数据的id作为元素的key:
    //当元素没有确定的id时，你可以使用他的序列号索引index作为key,如果列表项目的顺序可能会变化，我们不建议使用索引来用作键值，因为这样做会导致性能的负面影响，还可能引起组件状态问题。
    <ListItem key={number}
              value={number} />
 );
	return (
	  <ul>{listItems}</ul>
	);
	//JSX 允许在大括号中嵌入任何表达式，所以我们可以在 map() 中这样使用：
	/*var numbers;
	return (
	    <ul>
	      {
	      	numbers = props.numbers,   //注意这里要加逗号
	      	numbers.map((number) =>
	        <ListItem key={number.toString()}
	                  value={number} />
	 
	      )}
	    </ul>
	);*/
/*这么做有时可以使你的代码更清晰，但有时这种风格也会被滥用。就像在 JavaScript 中一样，
 * 何时需要为了可读性提取出一个变量，这完全取决于你。但请记住，如果一个 map() 嵌套了太多层级，那你就可以提取出组件。*/
}
 
const numbers = [1, 2, 3, 4, 5];
class reactListsKeys extends React.Component{
	render(){
		return(
			<NumberList numbers={numbers} />
		);
	}
}
 
export default reactListsKeys;