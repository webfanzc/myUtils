class XSet extends Set {
  union (...sets) {
    return XSet.union(this, ...sets)
  }

  intersection (...sets) {
    return XSet.intersection(this, ...sets)
  }

  difference (set) {
    return XSet.difference(this, set)
  }

  symmetricDifference (set) {
    return XSet.symmetricDifference(this, set)
  }

  cartesianProduct (set) {
    return XSet.cartesianProduct(this, set)
  }

  powerSet () {
    return XSet.powerSet(this)
  }

  // 多个集合的并集
  static union (a, ...sets) {
    const unionSet = new XSet(a)

    for (const b of sets) {
      for (const bValue of b) {
        unionSet.add(bValue)
      }
    }

    return unionSet
  }
  // 多个集合的交集
  static intersection (a, ...sets) {
    const intersectionSet = new XSet(a)

    for (const aValue of a) {
      for (const b of sets) {
        if (!b.has(aValue)) {
          intersectionSet.delete(aValue)
        }
      }
    }
    return intersectionSet
  }

  // 差集
  static difference (a, b) {
    const differenceSet = new XSet(a)

    for (const bValue of b) {
      if (a.has(bValue)) {
        differenceSet.delete(bValue)
      }
    }

    return differenceSet
  }
  // 对称差集
  static symmetricDifference (a, b) {
    return a.union(b).difference(a.intersection(b))
  }

  // 笛卡尔积
  static cartesianProduct (a, b) {
    const cartesianProductSet = new XSet()

    for (const aValue of a) {
      for (const bValue of b) {
        cartesianProductSet.add([aValue, bValue])
      }
    }

    return cartesianProductSet
  }

  // 幂集
  static powerSet (a) {
    const powerSet = new XSet().add(new XSet())

    for (const aValue of a) {
      for (const set of new XSet(powerSet)) {
        powerSet.add(new XSet(set).add(aValue))
      }
    }

    return powerSet
  }
}
