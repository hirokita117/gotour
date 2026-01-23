package main

import (
	"fmt"

	"golang.org/x/tour/tree"
)

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func Walk(t *tree.Tree, ch chan int) {
	var walk func(t *tree.Tree)
	walk = func(t *tree.Tree) {
		if t == nil {
			return
		}
		walk(t.Left)
		ch <- t.Value
		walk(t.Right)
	}
	walk(t)
	close(ch)
}

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool {
	ch1 := make(chan int)
	ch2 := make(chan int)
	go Walk(t1, ch1)
	go Walk(t2, ch2)

	for v1 := range ch1 {
		v2, ok := <-ch2
		if !ok || v1 != v2 {
			return false
		}
	}
	_, ok := <-ch2
	return !ok
}

func main() {
	// Test Walk
	ch := make(chan int)
	go Walk(tree.New(1), ch)
	fmt.Print("Walk result: ")
	for v := range ch {
		fmt.Print(v, " ")
	}
	fmt.Println()

	// Test Same
	fmt.Println("Same(tree.New(1), tree.New(1)):", Same(tree.New(1), tree.New(1)))
	fmt.Println("Same(tree.New(1), tree.New(2)):", Same(tree.New(1), tree.New(2)))
}
