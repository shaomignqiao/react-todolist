import React, { Component } from 'react'
 
class ToastBox extends Component {
  constructor() {
    super()
    this.transitionTime = 300
    this.state = { notices: [] }
    this.removeNotice = this.removeNotice.bind(this)
  }
 
  getNoticeKey() {
    const { notices } = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }
 
  addNotice(notice) {
    const { notices } = this.state
    notice.key = this.getNoticeKey()
 
    // notices.push(notice);//展示所有的提示
    notices[0] = notice;//仅展示最后一个提示
     
    this.setState({ notices })
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key)
      }, notice.duration)
    }
    return () => { this.removeNotice(notice.key) }
  }
 
  removeNotice(key) {
    const { notices } = this.state
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
          return false
        }
        return true
      })
    })
    //1.filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。
	//和map()类似，Array的filter()也接收一个函数。和map()不同的是，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
  	
  	//2.map()方法将调用的数组的每个元素传递给指定的函数，并返回一个数组，它包含该函数的返回值。
	//传递给map()的函数的调用方式和传递给forEach()的函数的调用方式一样。但传递给map()的函数应该有返回值。注意：map()返回的是新数组：它不修改调用的数组。
  }
 
  render() {
    const { notices } = this.state
    const icons = {
      info: 'toast_info',
      success: 'toast_success',
      error: 'toast_error',
      loading: 'toast_loading'
    }
    return (
      <div className="toast">
        {
          notices.map(notice => (
            <div className="toast_bg" key={notice.key}>
              <div className='toast_box'>
                <div className={`toast_icon ${icons[notice.type]}`}></div>
                <div className='toast_text'>{notice.content}</div> 
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}
 
export default ToastBox