# Below is the interface for Iterator, which is already defined for you.
#
class Iterator(object):
    def __init__(self, nums):
        """
        Initializes an iterator object to the beginning of a list.
        :type nums: List[int]
        """

    def hasNext(self):
        """
        Returns true if the iteration has more elements.
        :rtype: bool
        """

    def next(self):
        """
        Returns the next element in the iteration.
        :rtype: int
        """

class PeekingIterator(object):
    def __init__(self, iterator):
        """
        Initialize your data structure here.
        :type iterator: Iterator
        """
        self.next = None
        if iterator.hasNext():
            self.next = iterator.next()
        self.iter = iterator
        print(1)
        

    def peek(self):
        """
        Returns the next element in the iteration without advancing the iterator.
        :rtype: int
        """
        print(2)

        return self.next
        


    def next(self):
        """
        :rtype: int
        """
        print(3)
        ans = self.next
        self.next = self.iter.next() if self.iter.hasNext() else None
        return ans



    def hasNext(self):
        """
        :rtype: bool
        """
        print(4)
        return self.next != None

        
# Your PeekingIterator object will be instantiated and called as such:
nums = [1, 2, 3]
iter = PeekingIterator(Iterator(nums))
while iter.hasNext():
    val = iter.peek()   # Get the next element but not advance the iterator.
    iter.next()  # Should return the same value as [val].
    print (val)
