### 你怎么理解 vue 中的 diff 算法？

` Author rise created on 2020/1/23 `

- `vue`的`diff`算法的核心其实是在 `vue/src/core/vdom/patch.js`中`updateChildren`方法。
#### Diff 算法的主要过程：
- 通过对比树的边界结点，缩小两个树的大小。
- 通过key或者遍历找到相同（这里的相同指的是可复用的结点，并不是完全相同的结点）的结点。
- 通过对比最后的索引值，删除和新增结点。
#### 详细的结合代码分析如下：
```javascript
function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    let oldStartIdx = 0
    let newStartIdx = 0
    let oldEndIdx = oldCh.length - 1
    let oldStartVnode = oldCh[0]
    let oldEndVnode = oldCh[oldEndIdx]
    let newEndIdx = newCh.length - 1
    let newStartVnode = newCh[0]
    let newEndVnode = newCh[newEndIdx]
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx]
        // 对比新树的开始结点和旧树的开始结点（边界结点）
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        // 如果是相同结点。注意此时的相同结点并不是完全相同的结点，只是对比了一部分内容。
        // 此时如果是dom元素的话，只需要标签名称相同和key相同即可，注意这里用到了key
        // 此时索引发生了变化，边界缩小。
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        // 对比新树的结束结点和旧树的结束结点（边界结点）
        // 发生的变化与上边相同
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldStartVnode, newEndVnode)) { 
        // 对比新树的结束结点和旧树的开始结点（边界结点）
        // 此时表明元素的顺序可能发生了变化，移动元素，并且继续改变索引，缩小边界。
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx)
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldEndVnode, newStartVnode)) { 
        // 对比新树的开始结点和旧树的结束结点（边界结点）
        // 此时表明元素的顺序可能发生了变化，移动元素，并且继续改变索引，缩小边界。
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      } else {
         // 如果边界结点都不存在可复用的结点，那么需要进行遍历操作，寻找其中可以复用的结点。
         // 下面这段代码是通过key，寻找到key相同的元素
         // 如果能通过key找到可以复用的结点，那么执行pathNode操作。注意这里用到了key值
         // 如果找不到key相同的结点，那么执行findIdxInOld。从旧树的结点中遍历找到可以复用的结点
         // 若没有可复用的结点，则执行创建操作。
         // 注意： 此时用到了大量的遍历操作，上面通过缩小树的边界。减少了下面需要遍历结点的数目。
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
        } else {
          vnodeToMove = oldCh[idxInOld]
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx)
            oldCh[idxInOld] = undefined
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
          }
        }
        newStartVnode = newCh[++newStartIdx]
      }
    }
 
 
    // 最后如果oldStartIdx > oldEndIdx,则说明有新增的元素，执行新增操作。
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
    } else if (newStartIdx > newEndIdx) {
      // 如果newStartIdx > newEndIdx，则说明有删除的元素，执行删除操作。
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
    }
  }
```
#### 注意：上面的diff过程中总共两处对key的使用。

- 在sameVnode方法中，通过对比key来确定是否是可以复用的元素。
- 在后面的寻找可复用的dom中，出现了对key的使用。通过使用key来快速定位可以复用的元素。
#### 对key作用的总结：

- 在寻找可复用结点时，通过建立key和元素索引的映射createKeyToOldIdx，减少了遍历的时间。否则每次都需要通过findIdxInOld方法来遍历寻找可复用结点。
- 通过key标示元素，在某种程度上可以避免在findIdxInOld寻找的结点复用性不高，导致多余的diff。
