package main

import (
	"io"
	"os"
	"strings"
)

type rot13Reader struct {
	r io.Reader
}

func rot13(b byte) byte {
	switch {
	case b >= 'A' && b <= 'Z':
		return 'A' + (b-'A'+13)%26
	case b >= 'a' && b <= 'z':
		return 'a' + (b-'a'+13)%26
	default:
		return b
	}
}

func (r rot13Reader) Read(b []byte) (int, error) {
	n, err := r.r.Read(b)
	for i := 0; i < n; i++ {
		b[i] = rot13(b[i])
	}
	return n, err
}

func main() {
	s := strings.NewReader("Lbh penpxrq gur pbqr!")
	r := rot13Reader{s}
	io.Copy(os.Stdout, &r)
}
