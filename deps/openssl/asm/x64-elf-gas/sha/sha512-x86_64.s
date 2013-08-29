.text


.globl	sha256_block_data_order
.type	sha256_block_data_order,@function
.align	16
sha256_block_data_order:
	pushq	%rbx
	pushq	%rbp
	pushq	%r12
	pushq	%r13
	pushq	%r14
	pushq	%r15
	movq	%rsp,%r11
	shlq	$4,%rdx
	subq	$64+32,%rsp
	leaq	(%rsi,%rdx,4),%rdx
	andq	$-64,%rsp
	movq	%rdi,64+0(%rsp)
	movq	%rsi,64+8(%rsp)
	movq	%rdx,64+16(%rsp)
	movq	%r11,64+24(%rsp)
.Lprologue:

	leaq	K256(%rip),%rbp

	movl	0(%rdi),%eax
	movl	4(%rdi),%ebx
	movl	8(%rdi),%ecx
	movl	12(%rdi),%edx
	movl	16(%rdi),%r8d
	movl	20(%rdi),%r9d
	movl	24(%rdi),%r10d
	movl	28(%rdi),%r11d
	jmp	.Lloop

.align	16
.Lloop:
	xorq	%rdi,%rdi
	movl	0(%rsi),%r12d
	movl	%r8d,%r13d
	movl	%eax,%r14d
	bswapl	%r12d
	rorl	$14,%r13d
	movl	%r9d,%r15d
	movl	%r12d,0(%rsp)

	rorl	$9,%r14d
	xorl	%r8d,%r13d
	xorl	%r10d,%r15d

	rorl	$5,%r13d
	addl	%r11d,%r12d
	xorl	%eax,%r14d

	addl	(%rbp,%rdi,4),%r12d
	andl	%r8d,%r15d
	movl	%ebx,%r11d

	rorl	$11,%r14d
	xorl	%r8d,%r13d
	xorl	%r10d,%r15d

	xorl	%ecx,%r11d
	xorl	%eax,%r14d
	addl	%r15d,%r12d
	movl	%ebx,%r15d

	rorl	$6,%r13d
	andl	%eax,%r11d
	andl	%ecx,%r15d

	rorl	$2,%r14d
	addl	%r13d,%r12d
	addl	%r15d,%r11d

	addl	%r12d,%edx
	addl	%r12d,%r11d
	leaq	1(%rdi),%rdi
	addl	%r14d,%r11d

	movl	4(%rsi),%r12d
	movl	%edx,%r13d
	movl	%r11d,%r14d
	bswapl	%r12d
	rorl	$14,%r13d
	movl	%r8d,%r15d
	movl	%r12d,4(%rsp)

	rorl	$9,%r14d
	xorl	%edx,%r13d
	xorl	%r9d,%r15d

	rorl	$5,%r13d
	addl	%r10d,%r12d
	xorl	%r11d,%r14d

	addl	(%rbp,%rdi,4),%r12d
	andl	%edx,%r15d
	movl	%eax,%r10d

	rorl	$11,%r14d
	xorl	%edx,%r13d
	xorl	%r9d,%r15d

	xorl	%ebx,%r10d
	xorl	%r11d,%r14d
	addl	%r15d,%r12d
	movl	%eax,%r15d

	rorl	$6,%r13d
	andl	%r11d,%r10d
	andl	%ebx,%r15d

	rorl	$2,%r14d
	addl	%r13d,%r12d
	addl	%r15d,%r10d

	addl	%r12d,%ecx
	addl	%r12d,%r10d
	leaq	1(%rdi),%rdi
	addl	%r14d,%r10d

	movl	8(%rsi),%r12d
	movl	%ecx,%r13d
	movl	%r10d,%r14d
	bswapl	%r12d
	rorl	$14,%r13d
	movl	%edx,%r15d
	movl	%r12d,8(%rsp)

	rorl	$9,%r14d
	xorl	%ecx,%r13d
	xorl	%r8d,%r15d

	rorl	$5,%r13d
	addl	%r9d,%r12d
	xorl	%r10d,%r14d

	addl	(%rbp,%rdi,4),%r12d
	andl	%ecx,%r15d
	movl	%r11d,%r9d

	rorl	$11,%r14d
	xorl	%ecx,%r13d
	xorl	%r8d,%r15d

	xorl	%eax,%r9d
	xorl	%r10d,%r14d
	addl	%r15d,%r12d
	movl	%r11d,%r15d

	rorl	$6,%r13d
	andl	%r10d,%r9d
	andl	%eax,%r15d

	rorl	$2,%r14d
	addl	%r13d,%r12d
	addl	%r15d,%r9d

	addl	%r12d,%ebx
	addl	%r12d,%r9d
	leaq	1(%rdi),%rdi
	addl	%r14d,%r9d

	movl	12(%rsi),%r12d
	movl	%ebx,%r13d
	movl	%r9d,%r14d
	bswapl	%r12d
	rorl	$14,%r13d
	movl	%ecx,%r15d
	movl	%r12d,12(%rsp)

	rorl	$9,%r14d
	xorl	%ebx,%r13d
	xorl	%edx,%r15d

	rorl	$5,%r13d
	addl	%r8d,%r12d
	x